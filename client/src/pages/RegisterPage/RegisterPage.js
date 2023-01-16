import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';

const RegisterPage = () => {
  return (
    <div className='flex items-center justify-center px-4 pt-20 pb-12'>
      <div className='w-full max-w-md space-y-8'>
        <div className='flex flex-col items-center'>
          <Logo />
          <h2 className='mt-6 text-3xl font-bold tracking-tight text-center text-gray-900'>
            Регистрация аккаунта
          </h2>
        </div>
        <form className='last:mt-2' action='#' method='POST'>
          <div className='space-y-3'>
            <Input
              id='firstName'
              name='firstName'
              type='text'
              label='Имя'
              placeholder='Имя'
              autoсomplete='given-name'
              errorMessage='Неверно заполнено поле'
            />
            <Input
              id='lastName'
              name='lastName'
              type='text'
              label='Фамилия'
              placeholder='Фамилия'
              autoсomplete='family-name'
              errorMessage='Неверно заполнено поле'
            />
            <Input
              id='email'
              name='email'
              type='email'
              label='Email'
              placeholder='Email'
              autoсomplete='email'
              errorMessage='Введите верный email'
            />
            <Input
              id='password'
              name='password'
              type='password'
              label='Пароль'
              placeholder='Пароль'
              autoсomplete='password'
              errorMessage='Введите верный пароль'
            />
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700'
            >
              Регистрация
            </button>
          </div>

          <div className='mt-3 text-sm'>
            <span>Есть аккаунт? </span>
            <Link
              to='/login'
              className='font-medium text-indigo-600 transition-colors duration-300 hover:text-indigo-500'
            >
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
