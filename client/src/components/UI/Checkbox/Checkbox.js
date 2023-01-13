import React from 'react';

const Checkbox = ({ id, name, label }) => {
  return (
    <div className='flex items-center'>
      <input
        id={id}
        name={name}
        type='checkbox'
        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-transparent cursor-pointer'
      />
      <label htmlFor={name} className='ml-2 block text-sm text-gray-900'>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
