import React from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import facebookIcon from '../../assets/facebook.svg';
import telegramIcon from '../../assets/telegram.svg';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='flex flex-col my-16'>
          <div className='w-full h-1 mb-16 bg-gray-900'></div>

          <div className='flex items-center justify-between'>
            <Logo link />
            <div className='flex items-center gap-x-2'>
              <a href='/' target='_blank' className='block w-[24px] h-[24px]'>
                <img
                  className='block w-full h-full'
                  src={facebookIcon}
                  alt='facebook'
                />
              </a>  
              <a href='/' target='_blank' className='block w-[24px] h-[24px]'>
                <img
                  className='block w-full h-full'
                  src={telegramIcon}
                  alt='facebook'
                />
              </a>
            </div>
          </div>

          <div className='w-full h-0.5 mt-16 mb-16 bg-gray-200'></div>

          <div className="flex justify-center gap-x-10">
            <span>© 2023 Nikonov Ilya</span>
            <span>React-Redux-Tailwind</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
