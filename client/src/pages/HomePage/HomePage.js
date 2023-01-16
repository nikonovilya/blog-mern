import React from 'react';
import Container from '../../components/Container/Container';
import PostBig from '../../components/PostBig/PostBig';
import PostSmall from '../../components/PostSmall/PostSmall';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <div className='mt-12'>
        <Container>
          <PostBig />
          <div className='grid grid-cols-3 mt-16 auto-rows-auto gap-x-8 gap-y-16'>
            {[...Array(3)].map(() => {
              return <PostSmall />;
            })}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
