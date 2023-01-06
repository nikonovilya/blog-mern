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
