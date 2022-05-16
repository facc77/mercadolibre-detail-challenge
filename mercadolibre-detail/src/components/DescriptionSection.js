import React from "react";
import product from "../assets/mock";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DescriptionSection = () => {
  return (
    <Box sx={{ marginLeft: "3rem" }}>
      <Typography sx={{ fontSize: "24px", marginY: "2rem" }}>
        Descripción
      </Typography>
      <Typography
        sx={{ color: "#666", fontSize: "20px", whiteSpace: "pre-wrap" }}
      >
        {product.description.value}
      </Typography>
    </Box>
  );
};

export default DescriptionSection;
