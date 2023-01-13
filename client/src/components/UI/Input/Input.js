import React from 'react';

const Input = ({
  id,
  name,
  type,
  label,
  placeholder,
  autoсomplete,
  errorMessage,
}) => {
  return (
    <div>
      <label htmlFor={name} className='sr-only'>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoсomplete={autoсomplete}
        className='w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm'
      />
      <p className='mt-2 hidden text-pink-600 text-sm'>{errorMessage}</p>
    </div>
  );
};

export default Input;
