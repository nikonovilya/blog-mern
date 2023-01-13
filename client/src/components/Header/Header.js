import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Header = () => {
  const isAuth = false;

  return (
    <header className='py-4 shadow-md bg-white'>
      <Container>
        <div className='flex justify-between items-center'>
          <Logo link />
          <div className='font-medium items-center justify-end md:flex md:flex-1 lg:w-0'>
            {isAuth ? (
              <>
                <Link
                  to='/create'
                  className='inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                >
                  Написать статью
                </Link>
                <Link
                  to='/'
                  className='ml-2 inline-flex items-center justify-center rounded-md bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-7 00'
                >
                  Выйти
                </Link>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='font-medium text-base text-gray-500 hover:text-gray-900'
                >
                  Войти
                </Link>
                <Link
                  to='/register'
                  className='ml-8 inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                >
                  Создать аккаунт
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
