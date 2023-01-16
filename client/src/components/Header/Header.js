import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Header = () => {
  const isAuth = false;

  return (
    <header className='py-4 bg-white shadow-md'>
      <Container>
        <div className='flex items-center justify-between'>
          <Logo link />
          <div className='items-center justify-end font-medium md:flex md:flex-1 lg:w-0'>
            {isAuth ? (
              <>
                <Link
                  to='/create'
                  className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white transition-colors bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700'
                >
                  Написать статью
                </Link>
                <Link
                  to='/'
                  className='inline-flex items-center justify-center px-4 py-2 ml-2 text-base font-medium text-white transition-colors duration-300 rounded-md shadow-sm bg-rose-600 hover:bg-rose-700'
                >
                  Выйти
                </Link>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='text-base font-medium text-gray-500 transition-colors duration-300 hover:text-gray-900'
                >
                  Войти
                </Link>
                <Link
                  to='/register'
                  className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700'
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
