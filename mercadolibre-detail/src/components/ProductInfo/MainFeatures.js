import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import product from '../../assets/mock';
import { ThemeContext } from '../../router/AppRouter';

const MainFeatures = () => {
  const theme = useContext(ThemeContext);

  const mainFeatures = product.attributes.filter(
    (atribute) => atribute.attribute_group_id === '',
  );
  const subFeatures = product.attributes.filter(
    (atribute) => atribute.attribute_group_id === 'OTHERS',
  );

  // uso de funcion para dar color a la tabla ya que eslint no permite ternarios anidados
  const tableCellColor = (id, par) => {
    const color = par ? '#fff' : 'rgba(0,0,0,.1)';
    if (id % 2 === 0) {
      if (theme) {
        return '#333333';
      } else {
        return 'rgb(245, 245, 245)';
      }
    } else if (theme) {
      return '#232323';
    } else {
      return color;
    }
  };
  return (
    <Grid item xs={12} md={8}>
      <Box
        sx={{
          position: 'relative',
          bottom: { xs: 0, md: '8rem' },
          paddingBottom: '1rem',
          marginLeft: '3rem',
          borderBottom: ' 1px solid',
          borderImage: `linear-gradient(to right,${
            theme ? '#fff' : 'rgba(0,0,0,.1)'
          }  90%, transparent 20%) 100% 1`,
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            marginBottom: '1.5rem',
            color: theme ? '#fff' : '',
          }}
        >
          Características principales
        </Typography>
        <Table sx={{ width: '90%', borderRadius: '10px' }}>
          {mainFeatures.map((feature) => (
            <tbody key={feature.id}>
              <TableRow
                sx={{
                  textAlign: 'start',
                  padding: '15px 16px 15px 16px',
                }}
              >
                <TableCell
                  sx={{
                    padding: '15px 16px 15px 16px',
                    border: 0,
                    fontSize: '16px',
                    fontWeight: 500,
                    width: '30%',
                    color: theme ? '#fff' : '',
                    backgroundColor: tableCellColor(feature.value_id, false),
                    /* feature.value_id % 2 === 0
                        ? theme
                          ? '#333333'
                          : 'rgb(245, 245, 245)'
                        : theme
                        ? '#232323'
                        : 'rgba(0,0,0,.1)', */
                  }}
                >
                  {feature.name}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '16px',
                    backgroundColor: tableCellColor(feature.value_id, true),
                    /* feature.value_id % 2 !== 0
                        ? theme
                          ? '#333333'
                          : 'rgb(245, 245, 245)'
                        : theme
                        ? '#232323'
                        : '#fff', */
                    border: 0,
                    color: theme ? '#fff' : '',
                  }}
                >
                  {feature.value_name}
                </TableCell>
              </TableRow>
            </tbody>
          ))}
        </Table>
        <Typography
          sx={{
            fontSize: '20px',
            marginY: '1.5rem',
            color: theme ? '#fff' : '',
          }}
        >
          Otras características
        </Typography>
        <Box
          sx={{
            columnCount: 2,
          }}
        >
          {subFeatures.map((feature) => (
            <Typography
              key={feature.name}
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                marginY: '5px',
                color: theme ? '#fff' : '',
              }}
            >
              {feature.name} :
              <Box
                component='span'
                sx={{ fontWeight: 400, color: theme ? '#fff' : '' }}
              >
                {feature.value_name}
              </Box>
            </Typography>
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default MainFeatures;
