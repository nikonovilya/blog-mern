import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import { handleValidationErrors } from './utils/handleValidationErrors.js';
import { registerValidation, loginValidation } from './validations/auth.js';
import { createPostValidation } from './validations/post.js';
import { register, login, getMe } from './controllers/auth.js';
import { getAll, getOne, create, remove, update } from './controllers/post.js';
import { verifyToken } from './utils/verifyToken.js';

dotenv.config();
const PORT = process.env.PORT || 6001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.post(
  '/auth/register',
  registerValidation,
  handleValidationErrors,
  register
);
app.post('/auth/login', loginValidation, handleValidationErrors, login);
app.get('/auth/me', verifyToken, getMe);

app.post('/upload', verifyToken, upload.single('image'), (req, res) => {
  res.json({ url: `/uploads/${req.file.originalname}` });
});

app.get('/posts', getAll);
app.get('/posts/:id', getOne);
app.post(
  '/posts',
  verifyToken,
  createPostValidation,
  handleValidationErrors,
  create
);
app.delete('/posts/:id', verifyToken, remove);
app.patch(
  '/posts/:id',
  verifyToken,
  createPostValidation,
  handleValidationErrors,
  update
);

async function start() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.wiew97m.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => {
      console.log(`App has been started on port: ${PORT}`);
    });
  } catch (error) {
    console.log('Server error', error.message);
    process.exit(1);
  }
}

start();
