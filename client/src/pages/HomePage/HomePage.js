import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
// import Post from '../../components/Post/Post';
import Tag from '../../components/Tag/Tag';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  return (
    <div className='mt-12'>
      <Container>
        <div className='grid grid-cols-2 grid-rows-1'>
          <Link to={'/'} className='group w-full'>
            <div className='relative pt-[66%] w-full bg-slate-200 rounded-lg overflow-hidden'>
              <img
                className='absolute top-0 left-0 right-0 bottom-0 block w-full bg-slate-100 object-cover group-hover:scale-110 duration-300'
                src='https://assets.website-files.com/63305270d726c747d0ccb9a5/6363daef601f1b234632a83d_pexels-ono-kosuki-5647617.webp'
                alt=''
              />
            </div>
          </Link>
          <div className='w-full h-full flex flex-col justify-center pl-12'>
            <div className='grid grid-flow-col row-auto auto-cols-min space-x-2'>
              <Tag name='React' />
              <Tag name='Javascript' />
              <Tag name='Tailwind' />
            </div>
            <div className='mt-5 flex justify-start'>
              <Link to={'/'} className='hover:underline'>
                <h3 className='text-2xl font-bold text-gray-900'>Заголовок</h3>
              </Link>
            </div>
            <p className='mt-4 text-base text-gray-700'>Описание</p>
            <div className='mt-4 flex justify-start text-gray-900 font-bold'>
              <Link
                to={'/'}
                className='group flex justify-start items-center hover:text-indigo-600 transition-colors duration-300'
              >
                <span className='mr-1'>Читать статью</span>
                <ChevronRightIcon className=' mt-[1px] w-3 h-3 [&>path]:stroke-[4] group-hover:translate-x-1 transition-transform duration-300' />
              </Link>
            </div>
          </div>
        </div>
        <div className=""></div>
      </Container>
    </div>
  );
};

export default HomePage;
