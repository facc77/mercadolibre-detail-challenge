import React, { useContext } from "react";
import { ThemeContext } from "../router/AppRouter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ProductCard = ({ product }) => {
  const theme = useContext(ThemeContext);
  const { img, price, description, freeShipping } = product;

  return (
    <Box
      sx={{
        height: "346px",
        width: "226px",
        marginX: "0.5rem",
        borderRadius: "4px",
        backgroundColor: theme ? "#232323" : "#fff",
        border: theme ? 0 : "1px solid rgb(245, 245, 245)",
        "&:hover": {
          boxShadow:
            " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
        },
      }}
    >
      <Box component="img" sx={{ width: "100%", height: "224px" }} src={img} />
      <Box sx={{ padding: "8px 10px 14px 14px" }}>
        <Typography sx={{ fontSize: "22px", color: theme ? "#fff" : "" }}>
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
          sx={{
            fontSize: "14px",
            color: theme ? "#fff" : "#000000",
            opacity: "80%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
