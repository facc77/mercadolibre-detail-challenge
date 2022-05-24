import React from "react";
import AppBar from "@mui/material/AppBar";
import CartIcon from "../../assets/img/cartIcon.png";
import LocationIcon from "../../assets/img/locationLogo.png";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const pages = [
  "Categorias",
  "Ofertas",
  "Historial",
  "Supermercado",
  "Moda",
  "Vender",
  "Ayuda",
];
const userSettings = ["Creá tu cuenta", "Ingresá", "Mis compras"];

const ResponsiveAppBar = ({ darkMode, setDarkMode }) => {
  const handleTheme = () => setDarkMode((prevState) => !prevState);

  console.log(darkMode);

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#fff159", boxShadow: "0" }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "0.5rem",
            paddingX: "2rem",
            marginRight: "auto",
          }}
        >
          <Box sx={{ display: "flex", marginLeft: "2rem" }}>
            <Box
              component="img"
              src={LocationIcon}
              sx={{ width: "25px", height: "25px" }}
            />
            <Box sx={{ display: "block" }}>
              <Typography sx={{ color: "rgba(51,51,51,.6)", fontSize: "12px" }}>
                Enviar a
              </Typography>
              <Typography sx={{ color: "#333", fontSize: "14px" }}>
                Capital Federal
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                maxWidth: "500px",
                marginRight: "9rem",
              },
            }}
          >
            {pages.map((page) => (
              <Box
                component="button"
                key={page}
                sx={{
                  color: "rgba(51,51,51,.6)",
                  display: "block",
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  border: "0px",
                  paddingX: "0.5rem",
                  cursor: "pointer",
                }}
              >
                {page}
              </Box>
            ))}
            <IconButton
              sx={{ ml: 1 }}
              color="inherit"
              onClick={() => handleTheme()}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              maxWidth: "340px",
            }}
          >
            {userSettings.map((page) => (
              <Box
                component="button"
                key={page}
                sx={{
                  color: "#333",
                  display: "block",
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  border: "0px",
                  paddingX: "0.5rem",
                  cursor: "pointer",
                }}
              >
                {page}
              </Box>
            ))}

            <Box
              component="img"
              src={CartIcon}
              sx={{ height: "35px", width: "35px", marginLeft: "10px" }}
            />
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
