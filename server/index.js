import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { registerValidation, loginValidation } from './validations/auth.js';
import { createPostValidation } from './validations/post.js';
import { register, login, getMe } from './controllers/auth.js';
import { getAll, getOne, create, remove, update } from './controllers/post.js';
import { verifyToken } from './utils/verifyToken.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 6001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

app.use(express.json());

app.post('/auth/register', registerValidation, register);
app.post('/auth/login', loginValidation, login);
app.get('/auth/me', verifyToken, getMe);

app.get('/posts', getAll);
app.get('/posts/:id', getOne);
app.post('/posts', verifyToken, createPostValidation, create);
app.delete('/posts/:id', verifyToken, remove);
app.patch('/posts/:id', verifyToken, update);

async function start() {
  try {
    // mongoose.set("strictQuery", false);
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
