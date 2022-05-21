import React, { useContext } from "react";
import { ThemeContext } from "../../router/AppRouter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MercadoImage from "../../assets/img/MercadoShops.png";
import MercadoCards from "./MercadoCards";
import { MercadoShopList } from "../../assets/products";
import Grid from "@mui/material/Grid";

const MercadoShops = () => {
  const theme = useContext(ThemeContext);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "90%" },
        border: "1px solid rgba(0,0,0,.1)",
        borderRadius: "8px",
        marginBottom: "4rem",
        position: "relative",
        bottom: { xs: 0, md: "17rem" },
      }}
    >
      <Box sx={{ backgroundColor: "#e82e8a", width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box component="img" src={MercadoImage} sx={{ marginY: "1rem" }} />
        </Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "16px",
            fontWeight: 500,
            textAlign: "center",
            paddingBottom: "2rem",
          }}
        >
          Comprá en tiendas fuera de Mercado Libre
        </Typography>
        <Box sx={{ backgroundColor: theme ? "#232323" : "#f5f5f5" }}>
          <Grid
            container
            spacing={2}
            m={0}
            sx={{
              position: "relative",
              bottom: "2.5rem",
            }}
          >
            {MercadoShopList.map((product) => (
              <MercadoCards key={product.description} product={product} />
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              pb: "1rem",
              color: "#3483fa !important",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                borderRight: "1px solid lightgrey",
                paddingRight: "0.5rem",
                marginRight: "0.5rem",
                color: "#3483fa !important",
              }}
            >
              Anuncia aquí
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#3483fa !important",
                fontWeight: 500,
              }}
            >
              Crea tu Mercado Shop
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MercadoShops;
