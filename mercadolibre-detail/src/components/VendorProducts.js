import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { vendorProducts } from "../assets/products";
import ProductCard from "./ProductCard";

const VendorProducts = () => {
  console.log(vendorProducts);
  return (
    <Box
      sx={{
        marginX: "3rem",
        marginY: "2rem",
        borderBottom: " 1px solid",
        borderImage:
          "linear-gradient(to right, rgba(0,0,0,.1) 90%, transparent 20%) 100% 1",
      }}
    >
      <Typography sx={{ color: "#333333", fontSize: "24px", mb: "1.5rem" }}>
        Publicaciones del vendedor
      </Typography>
      <Box sx={{ display: "flex" }}>
        {vendorProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </Box>
      <Typography
        sx={{ color: "#1259c3", fontSize: "14px", marginY: "2.25rem" }}
      >
        Ver más publicaciones del vendedor
      </Typography>
    </Box>
  );
};

export default VendorProducts;
