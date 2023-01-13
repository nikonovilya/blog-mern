import React from 'react';

const Tag = ({ name }) => {
  return (
    <span className='px-3 py-1 bg-gray-900 rounded-md text-base text-white'>
      {name}
    </span>
  );
};

export default Tag;
