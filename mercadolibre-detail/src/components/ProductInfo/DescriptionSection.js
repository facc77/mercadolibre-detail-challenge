import React, { useContext } from "react";
import { ThemeContext } from "../../router/AppRouter";
import product from "../../assets/mock";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const DescriptionSection = () => {
  const theme = useContext(ThemeContext);
  return (
    <Grid item xs={12} md={8}>
      <Box
        sx={{
          marginLeft: { xs: 0, md: "3rem" },
          position: "relative",
          bottom: { xs: 0, md: "5rem" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20", md: "24px" },
            color: theme ? "#fff" : "",
          }}
        >
          Descripción
        </Typography>
        <Typography
          sx={{
            color: theme ? "#fff" : "#666",
            fontSize: { xs: "16px", md: "20px" },
            whiteSpace: "pre-wrap",
          }}
        >
          {product.description.value}
        </Typography>
      </Box>
    </Grid>
  );
};

export default DescriptionSection;
