import User from '../model/User.js';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    const { email, password, firstName, lastName, avatarUrl } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      passwordHash: hash,
      firstName,
      lastName,
      avatarUrl,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        _id: savedUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = savedUser._doc;

    res.json({ ...userData, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const isValidPass = await bcrypt.compare(password, user._doc.passwordHash);
    if (!isValidPass) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );
    const { passwordHash, ...userData } = user._doc;
    res.json({ ...userData, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден',
      });
    }

    const { passwordHash, ...userData } = user._doc;

    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
