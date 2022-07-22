import React from 'react';
import Box from '@mui/material/Box';
import DisneyStar from '../../assets/img/DisneyStar.png';
import Logo from '../../assets/img/Logo.png';
import SmallLogo from '../../assets/img/LogoNoWords.png';
import SearchLogo from '../../assets/img/searchLogo.png';

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff159',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '1200px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          component='img'
          sx={{
            height: 50,
            width: 150,
            display: { xs: 'none', md: 'block' },
          }}
          alt='Mercadolibre'
          src={Logo}
        />
        <Box
          component='img'
          sx={{
            height: 50,
            width: 75,
            display: { xs: 'block', md: 'none' },
          }}
          alt='Mercadolibre'
          src={SmallLogo}
        />
        <Box
          component='form'
          sx={{
            height: '40px',
            padding: '8px 1px',
            display: 'flex',
          }}
        >
          <Box
            component='input'
            type='text'
            placeholder='Buscar productos, marcas y más...'
            sx={{
              height: '39px',
              width: { xs: '100%', md: '600px' },
              boxShadow: '0 1px 2px 0 rgba(0,0,0,.2)',
              border: '0 rgba(0,0,0,.2)',
              borderRadius: '2px',
              fontSize: '16px',
              color: '#dcdcdc',
              fontWeight: '400',
              padding: '7px 60px 9px 15px',
            }}
          />
          <Box sx={{ position: 'relative' }}>
            <Box
              component='img'
              sx={{
                height: 35,
                width: 50,
                top: '2px',
                paddingLeft: '10px',
                right: '5px',
                position: 'absolute',
                borderLeft: '1px solid #dcdcdc',
              }}
              alt='Disney'
              src={SearchLogo}
            />
          </Box>
        </Box>
        <Box
          component='img'
          sx={{
            height: 39,
            width: 340,
            top: '10px',
            left: '10px',
            position: 'relative',
            display: { xs: 'none', md: 'block' },
          }}
          alt='Disney'
          src={DisneyStar}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
