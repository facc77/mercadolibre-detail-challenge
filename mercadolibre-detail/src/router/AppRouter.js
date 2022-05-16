import React from "react";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import DownNavbar from "../components/DownNavbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <DownNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productDetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
