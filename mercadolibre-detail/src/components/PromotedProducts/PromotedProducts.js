import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeContext } from '../../router/AppRouter';
import PromotedProductCard from './PromotedProductCard';
import { PromotedProductsList } from '../../assets/products';

const PromotedProducts = () => {
  const theme = useContext(ThemeContext);

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '90%' },
        border: '1px solid rgba(0,0,0,.1)',
        borderRadius: '8px',
        backgroundColor: theme ? '#232323' : '',
        padding: '32px 16px',
        position: 'relative',
        bottom: { xs: 0, md: '18rem' },
      }}
    >
      <Typography
        sx={{ color: theme ? '#fff' : 'rgba(0,0,0,.9)', fontSize: '18px' }}
      >
        Productos promocionados
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {PromotedProductsList.map((product) => (
          <PromotedProductCard key={product.description} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default PromotedProducts;
