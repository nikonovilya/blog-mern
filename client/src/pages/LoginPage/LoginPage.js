import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

const LoginPage = () => {
  return (
    <div className='flex items-center justify-center px-4 pt-20 pb-12'>
      <div className='w-full max-w-md space-y-8'>
        <div className='flex flex-col items-center'>
          <Logo />
          <h2 className='mt-6 text-3xl font-bold tracking-tight text-center text-gray-900'>
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
              defaultChecked
            />

            <div className='text-sm'>
              <Link
                to='/recovery'
                className='font-medium text-indigo-600 transition-colors duration-300 hover:text-indigo-500'
              >
                Забыли пароль?
              </Link>
            </div>
          </div>

          <div className='mt-6'>
            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700'
            >
              Войти
            </button>
          </div>

          <div className='mt-3 text-sm'>
            <span>Нет аккаунта? </span>
            <Link
              to='/register'
              className='font-medium text-indigo-600 transition-colors duration-300 hover:text-indigo-500'
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
