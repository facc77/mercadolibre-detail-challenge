import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import Navbar from '../components/Navbar/Navbar';
import DownNavbar from '../components/Navbar/DownNavbar';

export const ThemeContext = createContext();

const AppRouter = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={darkMode}>
      <BrowserRouter>
        <Navbar />
        <DownNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path='/' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default AppRouter;
