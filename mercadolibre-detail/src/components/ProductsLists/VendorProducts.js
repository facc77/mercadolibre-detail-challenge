import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ThemeContext } from '../../router/AppRouter';
import { vendorProducts } from '../../assets/products';
import ProductCard from '../ProductCard';

const VendorProducts = () => {
  const theme = useContext(ThemeContext);
  return (
    <Grid item xs={12} md={8}>
      <Box
        sx={{
          marginX: '3rem',
          position: 'relative',
          top: { xs: 0, md: '-10rem' },
          borderBottom: ' 1px solid',
          borderImage: `linear-gradient(to right,${
            theme ? '#fff' : 'rgba(0,0,0,.1)'
          }  90%, transparent 20%) 100% 1`,
        }}
      >
        <Typography
          sx={{
            color: theme ? '#fff' : '#333333',
            fontSize: '24px',
            mb: '1.5rem',
          }}
        >
          Publicaciones del vendedor
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          {vendorProducts.map((product) => (
            <ProductCard key={product.description} product={product} />
          ))}
        </Box>
        <Typography
          sx={{ color: '#1259c3', fontSize: '14px', marginY: '2.25rem' }}
        >
          Ver más publicaciones del vendedor
        </Typography>
      </Box>
    </Grid>
  );
};

export default VendorProducts;
