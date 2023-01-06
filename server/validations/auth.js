import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Минимальная длина пароля - 5 символов').isLength({
    min: 5,
  }),
  body('firstName', 'Неверное имя').isLength({ min: 2 }),
  body('lastName', 'Неверное имя').isLength({ min: 2 }),
  body('avatarUrl', 'Неверная ссылка на изображение').optional().isURL(),
];
