import React, { useContext } from "react";
import { ThemeContext } from "../../router/AppRouter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const MercadoCards = ({ product }) => {
  const theme = useContext(ThemeContext);

  const { img, description, price, discountPercent, freeShipping, toyStore } =
    product;
  return (
    <Grid item xs={5.5}>
      <Box
        sx={{
          padding: "12px",
          backgroundColor: "#ededed",
          borderRadius: "12px 12px 0px 0px",
        }}
      >
        <Typography
          sx={{
            fontSize: "10px",
            color: "#333",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {toyStore}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: theme ? "#353535" : "#fff",
          padding: "12px",
          borderRadius: "0px 0px 12px 12px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: "0.5rem" }}>
          <Box
            component="img"
            src={img}
            sx={{
              width: "100px",
              height: "100px",
            }}
          />
        </Box>
        <Box sx={{ paddingBottom: "2.5rem" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: theme ? "#fff" : "rgba(0,0,0,.9)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: theme ? "#fff" : "rgba(0,0,0,.7)",
              fontWeight: 500,
            }}
          >
            $ {price}
          </Typography>
          {freeShipping ? (
            <Typography sx={{ fontSize: "10px", color: "#00a650" }}>
              Envío gratis
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Grid>
  );
};

export default MercadoCards;
