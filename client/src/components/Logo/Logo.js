import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ link }) => {
  return link ? (
    <Link
      to='/'
      className='inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-800'
    >
      NIKON BLOG
    </Link>
  ) : (
    <div className='inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-base font-medium text-white shadow-sm'>
      NIKON BLOG
    </div>
  );
};

export default Logo;
