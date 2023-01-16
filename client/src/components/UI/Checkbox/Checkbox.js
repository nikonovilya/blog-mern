import React from 'react';

const Checkbox = ({ id, name, label, defaultChecked }) => {
  const [checked, setChecked] = React.useState(defaultChecked);

  return (
    <div className='flex items-center'>
      <input
        id={id}
        name={name}
        type='checkbox'
        className='w-4 h-4 text-indigo-600 border-gray-300 rounded cursor-pointer focus:ring-transparent'
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor={name} className='block ml-2 text-sm text-gray-900'>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
