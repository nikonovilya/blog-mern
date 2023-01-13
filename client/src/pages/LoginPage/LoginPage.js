import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center pt-20 pb-12 px-4'>
      <div className='w-full max-w-md space-y-8'>
        <div className='flex flex-col items-center'>
          <Logo />
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Вход в аккаунт
          </h2>
        </div>
        <form action='#' method='POST'>
          <div className='space-y-3'>
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

          <div className='flex items-center justify-between mt-6'>
            <Checkbox
              id='rememberMe'
              name='rememberMe'
              label='Запомнить меня'
            />

            <div className='text-sm'>
              <Link
                to='/recovery'
                className='font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300'
              >
                Забыли пароль?
              </Link>
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 transition-colors duration-300'
            >
              Войти
            </button>
          </div>

          <div className='mt-3 text-sm'>
            <span>Нет аккаунта? </span>
            <Link
              to='/register'
              className='font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300'
            >
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
