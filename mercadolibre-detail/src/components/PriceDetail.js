import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { styled } from '@mui/material/styles';
import ReviewsModal from './Reviews/ReviewsModal';
import { ThemeContext } from '../router/AppRouter';
import product from '../assets/mock';

const PriceDetail = () => {
  const theme = useContext(ThemeContext);

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#3483fa',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

  const spanStyle = {
    fontSize: '10px',
    color: theme ? '#fff' : 'rgba(0,0,0,.9)',
    display: 'inline',
    position: 'relative',
    top: '-4px',
  };

  const [open, setOpen] = React.useState(false);

  const price12Payments = Math.trunc(product.price / 12);
  const price12PaymentsDecimals = ((product.price / 12) % 1)
    .toFixed(2)
    .substring(2);

  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          marginTop: '16px',
          marginRight: { xs: 0, md: '16px' },
          padding: '16px 24px',
          border: '1px solid rgba(0,0,0,.1)',
          borderRadius: '8px',
          width: '368px',
          backgroundColor: theme ? '#232323' : '',
        }}
      >
        <Box>
          <Typography
            sx={{
              display: 'inline',
              borderRight: '1px solid lightgrey',
              paddingRight: '0.5rem',
              color: theme ? '#fff' : 'rgba(0,0,0,.55)',
              fontSize: '14px',
            }}
          >
            {product.condition}
          </Typography>
          <Typography
            sx={{
              display: 'inline',
              marginLeft: '0.5rem',
              color: theme ? '#fff' : 'rgba(0,0,0,.55)',
              fontSize: '14px',
            }}
          >
            {product.sold_quantity} vendidos
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography
            sx={{
              color: theme ? '#fff' : 'rgba(0,0,0,.9)',
              fontSize: '22px',
              fontWeight: 500,
              marginRight: '22px',
            }}
          >
            {product.title}
          </Typography>
          <Box sx={{ position: 'relative', display: 'inline' }}>
            <FavoriteBorderOutlinedIcon
              sx={{
                position: 'absolute',
                color: '#3483fa',
                width: '27px',
                height: '27px',
                right: '0rem',
                top: '0.3rem',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => setOpen(true)}
        >
          <StyledRating name='read-only' value={4} readOnly size='small' />
          <Typography
            sx={{
              marginLeft: '0.5rem',
              color: theme ? '#fff' : 'rgba(0,0,0,.55)',
              fontSize: '14px',
            }}
          >
            {product.reviews.length} opiniones
          </Typography>
        </Box>
        <ReviewsModal open={open} setOpen={setOpen} product={product} />

        <Box>
          <Typography
            sx={{
              fontSize: '36px',
              fontWeight: 300,
              color: theme ? '#fff' : '',
            }}
          >
            ${product.price}
          </Typography>
          <Typography
            sx={{
              color: theme ? '#fff' : 'rgba(0,0,0,.9)',
              fontSize: '16px',
              fontWeight: 400,
            }}
          >
            en 12x $ {price12Payments}
            <span style={spanStyle}>{price12PaymentsDecimals}</span>
          </Typography>
          <Typography
            sx={{
              color: '#3483fa',
              fontSize: '14px',
            }}
          >
            ver los medios de pago
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', mt: '1rem' }}>
          <LocalShippingIcon sx={{ color: '#00a650' }} />
          <Box sx={{ ml: '1rem' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  color: '#00a650',
                  fontSize: '16px',
                }}
              >
                Llega gratis
              </Typography>
              <Typography
                sx={{
                  color: '#00a650',
                  fontSize: '16px',
                  display: 'inline',
                  fontWeight: 500,
                  marginLeft: '2.5px',
                }}
              >
                mañana
              </Typography>
            </Box>
            <Typography
              sx={{
                color: '#3483fa',
                fontSize: '14px',
              }}
            >
              ver más formas de entrega
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', mt: '1rem' }}>
          <SubdirectoryArrowLeftIcon sx={{ color: '#00a650' }} />
          <Box sx={{ ml: '1rem' }}>
            <Typography
              sx={{
                color: '#00a650',
                fontSize: '16px',
              }}
            >
              Devolución gratis
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: theme ? '#fff' : 'rgba(0,0,0,.55)',
              }}
            >
              Tenés 30 días desde que lo recibís.
            </Typography>
            <Typography
              sx={{
                color: '#3483fa',
                fontSize: '14px',
              }}
            >
              Conocer más
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '16px',
              color: theme ? '#fff' : 'rgba(0,0,0,.9)',
              mt: '1.5rem',
              fontWeight: 500,
            }}
          >
            Stock disponible
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{
                fontSize: '16px',
                color: theme ? '#fff' : 'rgba(0,0,0,.9)',
                mt: '1.5rem',
              }}
            >
              Cantidad:
            </Typography>

            <Typography
              sx={{
                fontSize: '16px',
                color: theme ? '#fff' : 'rgba(0,0,0,.9)',
                mt: '1.5rem',
                ml: '3px',
                fontWeight: 500,
                display: 'inline',
              }}
            >
              1 unidad
            </Typography>
            <KeyboardArrowDownOutlinedIcon
              sx={{
                position: 'relative',
                top: '25px',
                left: '3px',
                width: '18px',
                height: '18px',
                color: theme ? '#fff' : '',
              }}
            />
            <Typography
              sx={{
                fontSize: '14px',
                color: theme ? '#fff' : 'rgba(0,0,0,.55)',
                mt: '1.5rem',
                display: 'inline',
                marginLeft: '7px',
              }}
            >
              ({product.available_quantity} disponibles)
            </Typography>
          </Box>
          <Box sx={{ mt: '1.5rem' }}>
            <Button
              sx={{
                textTransform: 'none',
                backgroundColor: '#3483fa',
                height: '48px',
                fontSize: '16px',
                fontWeight: 500,
                color: '#fff',
                width: '100%',
                '&:hover': {
                  backgroundColor: ' #2968c8',
                  transition: 'background-color .2s ease-in',
                },
              }}
            >
              Comprar Ahora
            </Button>
            <Button
              sx={{
                mt: '1rem',
                textTransform: 'none',
                backgroundColor: 'rgba(65,137,230,.15)',
                height: '48px',
                fontSize: '16px',
                fontWeight: 500,
                color: '#3483fa',
                width: '100%',
                '&:hover': {
                  backgroundColor: ' rgba(65,137,230,.2)',
                  transition: 'background-color .2s ease-in',
                },
              }}
            >
              Agregar al Carrito
            </Button>
          </Box>
          <Box>
            <Box sx={{ mt: '1rem', display: 'flex' }}>
              <GppGoodOutlinedIcon
                sx={{
                  position: 'relative',
                  width: '21px',
                  height: '21px',
                  color: theme ? '#fff' : '',
                }}
              />

              <Box sx={{ display: 'inline', ml: '3px' }}>
                <Typography
                  sx={{
                    color: '#3483fa',
                    transition: 'color .2s ease-in-out',
                    fontSize: '14px',
                  }}
                >
                  Compra protegida
                  <Box
                    component='span'
                    sx={{
                      display: 'inline',
                      fontSize: '14px',
                      color: theme ? '#fff' : 'rgba(0,0,0,.55)',
                    }}
                  >
                    , recibí el producto que esperabas o te devolvemos tu
                    dinero.
                  </Box>
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: '1rem', display: 'flex' }}>
              <EmojiEventsOutlinedIcon
                sx={{
                  width: '21px',
                  height: '21px',
                  position: 'relative',
                  color: theme ? '#fff' : '',
                }}
              />

              <Box sx={{ display: 'inline', ml: '3px' }}>
                <Typography
                  sx={{
                    color: '#3483fa',
                    transition: 'color .2s ease-in-out',
                    fontSize: '14px',
                  }}
                >
                  Mercado Puntos
                  <Box
                    component='span'
                    sx={{
                      display: 'inline',
                      fontSize: '14px',
                      color: theme ? '#fff' : 'rgba(0,0,0,.55)',
                    }}
                  >
                    . Sumás 149 puntos
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default PriceDetail;
