import React, { useState } from "react";
import product from "../assets/mock";
import Box from "@mui/material/Box";

const ProductCarousel = () => {
  const [FocusedImage, setFocusedImage] = useState([product.pictures[0].url]);

  const handleHover = (url) => {
    console.log(url);
    setFocusedImage(url);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {product.pictures.map((picture) => (
          <Box
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
          width: "700px",
          height: "500px",
          borderBottom: " 1px solid",
          borderImage:
            "linear-gradient(to right, rgba(0,0,0,.1) 90%, transparent 20%) 100% 1",
        }}
      >
        <Box
          component="img"
          src={FocusedImage}
          sx={{
            width: "500px",
            height: "auto",
            maxHeight: "500px",
            objectFit: "contain",
            cursor: "zoom-in",
            margin: "1.5rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductCarousel;
