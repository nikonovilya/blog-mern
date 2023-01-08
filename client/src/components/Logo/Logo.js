import React from 'react';
import slyles from './Logo.module.sass';

const Logo = () => {
  return (
    <a className={slyles.Logo} href='/'>
      <div>NIKON BLOG</div>
    </a>
  );
};

export default Logo;
