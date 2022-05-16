import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import suscriptionImage from "../assets/img/suscriptionImage.png";
import Button from "@mui/material/Button";

const suscriptionSection = () => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(0,0,0,.1)",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
    >
      <Typography
        sx={{
          borderBottom: "1px solid rgba(0,0,0,.1)",
          color: "rgba(0,0,0,.9)",
          fontSize: " 14px",
          fontWeight: 600,
          padding: "16px",
        }}
      >
        Subscribite al nivel 6 con 67% off!
      </Typography>
      <Box
        component="img"
        src={suscriptionImage}
        sx={{
          width: "206px",
          height: "120px",
          margin: "1rem",
        }}
      />
      <Typography
        sx={{
          color: "rgba(0,0,0,.9)",
          fontSize: " 16px",
          paddingX: "1rem",
        }}
      >
        La oferta termina el 31 de mayo
      </Typography>
      <Typography
        sx={{
          color: "rgba(0,0,0,.55)",
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
  );
};

export default suscriptionSection;
