import React, { useContext } from "react";
import { ThemeContext } from "../../router/AppRouter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const PromotedProductCard = ({ product }) => {
  const theme = useContext(ThemeContext);
  const { img, description, price, freeShipping } = product;

  return (
    <Box sx={{ mt: "1.5rem", display: "flex" }}>
      <Box
        component="img"
        src={img}
        sx={{
          width: "82px",
          height: "82px",
          border: "1px solid rgba(0,0,0,.1)",
          borderRadius: "4px",
        }}
      />
      <Box sx={{ marginX: "0.7rem" }}>
        <Typography sx={{ fontSize: "20px", color: theme ? "#fff" : "" }}>
          $ {price}
        </Typography>
        {freeShipping ? (
          <Typography
            sx={{ fontSize: "14px", color: "#00a650", fontWeight: 500 }}
          >
            Envío gratis
          </Typography>
        ) : null}
        <Typography
          sx={{ fontSize: "14px", color: theme ? "#fff" : "rgba(0,0,0,.8)" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default PromotedProductCard;
