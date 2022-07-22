import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeContext } from '../../router/AppRouter';
import { relatedProducts } from '../../assets/products';
import ProductCard from '../ProductCard';

const RelatedProducts = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Box
        sx={{
          marginX: '3rem',
          marginY: '2rem',
          position: 'relative',
          bottom: { sx: 0, md: '10rem' },
        }}
      >
        <Box sx={{ mb: '1rem' }}>
          <Typography
            sx={{
              color: theme ? '#fff' : '#333333',
              fontSize: '24px',
              mr: '1rem',
              display: 'inline',
            }}
          >
            Productos relacionados
          </Typography>
          <Typography
            sx={{ color: '#3483fa', fontSize: '16px', display: 'inline' }}
          >
            Anuncia aquí
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          {relatedProducts[0].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          marginX: '3rem',
          marginY: '2rem',
          position: 'relative',
          bottom: { sx: 0, md: '10rem' },
        }}
      >
        <Box sx={{ mb: '1rem' }}>
          <Typography
            sx={{
              color: theme ? '#fff' : '#333333',
              fontSize: '24px',
              mr: '1rem',
              display: 'inline',
            }}
          >
            Quienes vieron este producto también compraron
          </Typography>
          <Typography
            sx={{ color: '#3483fa', fontSize: '16px', display: 'inline' }}
          >
            Anuncia aquí
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          {relatedProducts[1].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default RelatedProducts;
