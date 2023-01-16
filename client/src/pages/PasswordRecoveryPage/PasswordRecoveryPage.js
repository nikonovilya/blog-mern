import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/UI/Input/Input';

const PasswordRecoveryPage = () => {
  return (
    <div className='flex items-center justify-center px-4 pt-20 pb-12'>
      <div className='w-full max-w-md space-y-8'>
        <div className='flex flex-col items-center'>
          <Logo />
          <h2 className='mt-6 text-3xl font-bold tracking-tight text-center text-gray-900'>
            Восстановление пароля
          </h2>
          <p className='mt-4 text-base text-center text-gray-700'>
            Текст о том что на email придет ссылка с восстановлением
          </p>
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
          </div>

          <div className='mt-3'>
            <button
              type='submit'
              className='flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700'
            >
              Отправить
            </button>
          </div>

          <div className='mt-3 text-sm'>
            <Link
              to='/login'
              className='font-medium text-indigo-600 transition-colors duration-300 hover:text-indigo-500'
            >
              Назад
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecoveryPage;
