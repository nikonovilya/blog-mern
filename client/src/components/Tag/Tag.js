import React from 'react';

const Tag = ({ name }) => {
  return (
    <span className='px-3 py-1 text-xs font-medium tracking-wider text-white uppercase bg-gray-900 rounded-md'>
      {name}
    </span>
  );
};

export default Tag;
