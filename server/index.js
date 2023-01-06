import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { registerValidation } from './validations/auth.js';
import { register } from './controllers/auth.js';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

app.use(express.json());

app.post('/auth/register', registerValidation, register);

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