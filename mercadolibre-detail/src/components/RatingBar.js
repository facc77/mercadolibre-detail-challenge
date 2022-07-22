import React, { useContext } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeContext } from '../router/AppRouter';

const RatingBar = ({ ratingStar, product }) => {
  const theme = useContext(ThemeContext);

  let ratingTotal = 0;

  product.reviews.forEach(({ rating }) => {
    if (rating === ratingStar) {
      ratingTotal += 1;
    }
  });

  const ratingPercentage = (ratingTotal * 100) / product.reviews.length;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Typography
        sx={{
          color: theme ? '#fff' : 'rgba(0,0,0,.4)',
          textAlign: 'center',
          width: '75px',
        }}
      >
        {ratingStar} {ratingStar > 1 ? 'estrellas' : 'estrella'}
      </Typography>
      <LinearProgress
        sx={{
          color: '#3483fa',
          borderRadius: '2px',
          width: '60%',
          backgroundColor: theme ? '#fff' : 'rgba(0,0,0,.1)',
        }}
        variant='determinate'
        value={parseInt(ratingPercentage, 10)}
      />
      <Box sx={{ position: 'relative' }}>
        <Typography
          sx={{
            color: theme ? '#fff' : 'rgba(0,0,0,.4)',
            position: 'absolute',
            top: '-0.7rem',
          }}
        >
          {ratingTotal}
        </Typography>
      </Box>
    </Box>
  );
};

export default RatingBar;
