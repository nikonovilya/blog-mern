import React from 'react';

const Tag = ({ name }) => {
  return (
    <span className='px-3 py-1 rounded-md text-xs font-medium uppercase tracking-wider text-white'>
      {name}
    </span>
  );
};

export default Tag;
