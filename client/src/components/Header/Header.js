import React from 'react';
import slyles from './Header.module.sass';
import { AppBar, Container, Button, Box } from '@mui/material';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: '64px',
          }}
        >
          <Logo />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <a className={slyles.Link} href='/login'>
              <Button variant='outlined'>Войти</Button>
            </a>
            <a className={slyles.Link} href='/register'>
              <Button variant='contained'>Создать аккаунт</Button>
            </a>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
