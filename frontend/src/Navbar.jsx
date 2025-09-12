import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Link
            href="#"
            underline="none"
            sx={{
              color: 'white',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                color: 'yellow',
                textDecoration: 'underline',
              },
            }}
          >
            Home
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              color: 'white',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                color: 'yellow',
                textDecoration: 'underline',
              },
            }}
          >
            Courses
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{
              color: 'white',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                color: 'yellow',
                textDecoration: 'underline',
              },
            }}
          >
            Contact
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
