import React from "react";
import ProductCarousel from "./ProductCarousel";
import PriceDetail from "./PriceDetail";
import product from "../assets/mock";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VendorProducts from "../components/VendorProducts";
import VendorInfo from "../components/VendorInfo";
import MainFeatures from "../components/MainFeatures";
import DescriptionSection from "../components/DescriptionSection";
import SuscriptionSection from "../components/SuscriptionSection";
import PaymentMethods from "../components/PaymentMethods";

const ProductDetail = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginY: "1rem",
        }}
      >
        <Box sx={{ width: "90%", display: "block", marginBottom: "1rem" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: 1.35,
              display: "inline",
            }}
          >
            También puede interesarte:
          </Typography>
          {product.relatedSearch.map((search) => (
            <Typography sx={{ display: "inline" }}> {search} - </Typography>
          ))}
        </Box>
        <Box sx={{ width: "90%", display: "block" }}>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: 1.35,
            }}
          >
            Volver al listado
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "90%",
            backgroundColor: "#fff",
            display: "flex",
            borderRadius: "5px",
            border: "1px solid rgba(0,0,0,.1)",
          }}
        >
          <Box>
            <ProductCarousel />
            <VendorProducts />
            <MainFeatures />
            <DescriptionSection />
          </Box>
          <Box>
            <PriceDetail />
            <VendorInfo />
            <SuscriptionSection />
            <PaymentMethods />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetail;
