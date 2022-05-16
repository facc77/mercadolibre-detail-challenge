import React from "react";
import AppBar from "@mui/material/AppBar";
import CartIcon from "../assets/img/cartIcon.png";
import LocationIcon from "../assets/img/locationLogo.png";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

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

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
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
                onClick={handleCloseNavMenu}
                sx={{
                  color: "rgba(51,51,51,.6)",
                  display: "block",
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  border: "0px",
                  paddingX: "0.5rem",
                }}
              >
                {page}
              </Box>
            ))}
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
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#333",
                  display: "block",
                  fontSize: "14px",
                  backgroundColor: "transparent",
                  border: "0px",
                  paddingX: "0.5rem",
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
