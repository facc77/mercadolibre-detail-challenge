import React, { useContext, useState } from "react";
import { ThemeContext } from "../router/AppRouter";
import product from "../assets/mock";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ProductCarousel = () => {
  const theme = useContext(ThemeContext);
  const [FocusedImage, setFocusedImage] = useState([product.pictures[0].url]);

  const handleHover = (url) => {
    console.log(url);
    setFocusedImage(url);
  };

  return (
    <Grid item xs={12} md={8}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column" }}
        >
          {product.pictures.map((picture) => (
            <Box
              key={picture.url}
              component="img"
              src={picture.url}
              width="46px"
              height="46px"
              sx={{
                margin: "0.5rem 1rem",
                border:
                  FocusedImage !== picture.url
                    ? "1px solid lightgrey"
                    : "2px solid #3483fa",
                padding: "2px",
                borderRadius: "5px",
              }}
              onMouseEnter={() => handleHover(picture.url)}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: { xs: "380px", md: "700px" },
            height: { xs: "250px", md: "500px" },
            borderBottom: " 1px solid",
            borderImage: `linear-gradient(to right,${
              theme ? "#fff" : "rgba(0,0,0,.1)"
            }  90%, transparent 20%) 100% 1`,
          }}
        >
          <Box
            component="img"
            src={FocusedImage}
            sx={{
              width: { xs: "380", md: "500px" },
              height: "auto",
              maxHeight: "500px",
              objectFit: "contain",
              cursor: "zoom-in",
              margin: "1.5rem",
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductCarousel;
