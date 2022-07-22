import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeContext } from '../router/AppRouter';
import ProductCarousel from '../components/ProductCarousel';
import PriceDetail from '../components/PriceDetail';
import product from '../assets/mock';
import VendorProducts from '../components/ProductsLists/VendorProducts';
import VendorInfo from '../components/VendorInfo';
import MainFeatures from '../components/ProductInfo/MainFeatures';
import DescriptionSection from '../components/ProductInfo/DescriptionSection';
import SuscriptionSection from '../components/SuscriptionSection';
import PaymentMethods from '../components/PaymentMethods';
import PromotedProducts from '../components/PromotedProducts/PromotedProducts';
import QuestionsAndAnswers from '../components/QuestionsSection/QuestionsAndAnswers';
import MercadoShops from '../components/MercadoShops/MercadoShops';
import RelatedProducts from '../components/ProductsLists/RelatedProducts';

const ProductDetail = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Box
        sx={{
          backgroundColor: {
            xs: theme ? '#353535' : '#fff',
            md: theme ? '#353535' : '#ededed',
          },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            flexDirection: 'column',
            paddingY: '1rem',
          }}
        >
          <Box sx={{ width: '90%', display: 'block', marginBottom: '1rem' }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: 1.35,
                display: 'inline',
                color: theme ? '#fff' : '',
              }}
            >
              También puede interesarte:
            </Typography>
            {product.relatedSearch.map((search) => (
              <Typography
                key={search}
                sx={{ display: 'inline', color: theme ? '#fff' : '' }}
              >
                {' '}
                {search} -
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '90%',
            }}
          >
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: 1.35,
                  borderRight: '1px solid lightgrey',
                  paddingRight: '0.5rem',
                  marginRight: '0.5rem',
                  display: 'inline',
                  color: theme ? '#fff' : '',
                }}
              >
                Volver al listado
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#3483fa !important',
                }}
              >
                {product.seachSections[0]} {'>'} {product.seachSections[1]}
                {'>'} {product.seachSections[2]}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  borderRight: '1px solid lightgrey',
                  paddingRight: '0.5rem',
                  marginRight: '0.5rem',
                  color: '#3483fa ',
                }}
              >
                Compartir
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#3483fa ',
                  display: 'inline',
                }}
              >
                Vender uno igual
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: {
                sx: '100%',
                md: '90%',
                background: `linear-gradient(180deg, ${
                  theme ? '#2a2a2a' : '#fff'
                } 93%,  ${theme ? '#353535' : '#ededed'} 7%)`,
              },
            }}
          >
            <Grid container>
              <ProductCarousel />
              <PriceDetail />
              <VendorProducts />
              <VendorInfo />
              <MainFeatures />
              <SuscriptionSection />
              <DescriptionSection />
              <PaymentMethods />
              <QuestionsAndAnswers />
              <Grid item xs={12} md={4}>
                <PromotedProducts />
                <MercadoShops />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '95%',
            position: 'relative',
            bottom: { sx: 0, md: '16rem' },
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              borderRight: '1px solid lightgrey',
              paddingRight: '0.5rem',
              marginRight: '0.5rem',
              color: theme ? '#fff' : '',
            }}
          >
            Publicación
            <Box
              component='span'
              sx={{ fontWeight: 500, color: theme ? '#fff' : '' }}
            >
              #{product.publicationNumber}
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              color: '#3483fa !important',
            }}
          >
            Denunciar
          </Typography>
        </Box>
        <RelatedProducts />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: theme ? '#2a2a2a' : '#fff',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            color: '#3483fa !important',
            padding: '2rem',
          }}
        >
          Proyecto realizado con fines educativos - Ferrer Gonzalo Facundo
        </Typography>
      </Box>
    </>
  );
};

export default ProductDetail;
