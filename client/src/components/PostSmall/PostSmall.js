import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Tag from '../Tag/Tag';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const PostSmall = ({ titleBig }) => {
  return (
    <div>
      <div className='flex flex-col h-full gap-y-4'>
        <Link to={'/'} className='w-full group'>
          <div className='relative pt-[66%] w-full bg-slate-200 rounded overflow-hidden'>
            <img
              className='absolute top-0 bottom-0 left-0 right-0 block object-cover w-full duration-300 bg-slate-100 group-hover:scale-105'
              src='https://assets.website-files.com/63305270d726c747d0ccb9a5/6363daef601f1b234632a83d_pexels-ono-kosuki-5647617.webp'
              alt=''
            />
          </div>
        </Link>
        <div className='flex flex-col justify-between grow'>
          <div className='flex flex-col gap-y-4'>
            <div className='grid grid-flow-col row-auto space-x-2 auto-cols-min'>
              <Tag name='React' />
              <Tag name='Javascript' />
              <Tag name='Tailwind' />
            </div>
            <div className='flex justify-start'>
              <Link to={'/'} className='hover:underline'>
                <h3
                  className={clsx(
                    'font-bold text-gray-900',
                    titleBig ? 'text-2xl' : 'text-lg'
                  )}
                >
                  How to make your business more sustainable
                </h3>
              </Link>
            </div>
            <p className='text-base text-gray-700'>
              Deleniti pariatur et voluptas. Nihil consectetur qui non. Sit quod
              esse molestiae voluptatem volu Deleniti pariatur et voluptas.
              Nihil consectetur qui non. Sit quod esse molestiae voluptatem volu
            </p>
          </div>
          <div className='flex justify-start mt-4 font-bold text-gray-900'>
            <Link
              to={'/'}
              className='flex items-center justify-start transition-colors duration-300 group hover:text-indigo-600'
            >
              <span className='mr-1'>???????????? ????????????</span>
              <ChevronRightIcon className='w-3 h-3 mt-[1px] [&>path]:stroke-[4] group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSmall;
