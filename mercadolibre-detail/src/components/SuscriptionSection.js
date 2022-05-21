import React, { useContext } from "react";
import { ThemeContext } from "../router/AppRouter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import suscriptionImage from "../assets/img/suscriptionImage.png";
import suscriptionImageDark from "../assets/img/suscriptionImageDark.png";
import Button from "@mui/material/Button";

const SuscriptionSection = () => {
  const theme = useContext(ThemeContext);

  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          border: "1px solid rgba(0,0,0,.1)",
          borderRadius: "8px",
          position: "relative",
          backgroundColor: theme ? "#232323" : "",
          bottom: { xs: 0, md: "5rem" },
          width: { xs: "100%", md: "90%" },
        }}
      >
        <Typography
          sx={{
            borderBottom: "1px solid rgba(0,0,0,.1)",
            color: theme ? "#fff" : "rgba(0,0,0,.9)",
            fontSize: " 14px",
            fontWeight: 500,
            padding: "16px",
          }}
        >
          Subscribite al nivel 6 con 67% off!
        </Typography>
        <Box
          component="img"
          src={theme ? suscriptionImageDark : suscriptionImage}
          sx={{
            width: "60%",
            height: "120px",
            margin: "1rem",
          }}
        />
        <Typography
          sx={{
            color: theme ? "#fff" : "rgba(0,0,0,.9)",
            fontSize: " 16px",
            paddingX: "1rem",
          }}
        >
          La oferta termina el 31 de mayo
        </Typography>
        <Typography
          sx={{
            color: theme ? "#fff" : "rgba(0,0,0,.55)",
            fontSize: " 16px",
            padding: "5px 1.2rem 1rem 1rem",
            borderBottom: "1px solid rgba(0,0,0,.1)",
          }}
        >
          Tu suscripción anual por $ 399/mes incluye Disney+, Star+, miles de
          descuentos en compras y ¡mucho más!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginY: "1rem",
            borderRadius: "6px",
          }}
        >
          <Button
            sx={{
              width: "90%",
              textTransform: "none",
              backgroundColor: "rgba(65,137,230,.15)",
            }}
          >
            Suscribite al nivel 6
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SuscriptionSection;
