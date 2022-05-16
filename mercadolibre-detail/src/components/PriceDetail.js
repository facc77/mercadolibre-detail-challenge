import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LeftArrowIcon from "../assets/img/leftArrowIcon.png";
import UpsideDownArrow from "../assets/img/UpsideDownArrow.png";
import TrophieIcon from "../assets/img/TrophieIcon.png";
import ShieldIcon from "../assets/img/ShieldIcon.png";
import HeartIcon from "../assets/img/HeartIcon.png";
import TruckIcon from "../assets/img/truckIcon.png";
import product from "../assets/mock";

const PriceDetail = () => {
  const price12Payments = Math.trunc(product.price / 12);
  const price12PaymentsDecimals = ((product.price / 12) % 1)
    .toFixed(2)
    .substring(2);
  return (
    <Box
      sx={{
        marginTop: "16px",
        marginRight: "16px",
        padding: "16px 24px",
        border: "1px solid rgba(0,0,0,.1)",
        borderRadius: "8px",
        width: "368px",
      }}
    >
      <Box>
        <Typography
          sx={{
            display: "inline",
            borderRight: "1px solid lightgrey",
            paddingRight: "0.5rem",
            color: "rgba(0,0,0,.55)",
            fontSize: "14px",
          }}
        >
          {product.condition}
        </Typography>
        <Typography
          sx={{
            display: "inline",
            marginLeft: "0.5rem",
            color: "rgba(0,0,0,.55)",
            fontSize: "14px",
          }}
        >
          {product.sold_quantity} vendidos
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            color: "rgba(0,0,0,.9)",
            fontSize: "22px",
            fontWeight: 500,
            marginRight: "22px",
          }}
        >
          {product.title}
        </Typography>
        <Box sx={{ position: "relative", display: "inline" }}>
          <Box
            component="img"
            src={HeartIcon}
            sx={{
              position: "absolute",
              width: "27px",
              height: "27px",
              right: "0.3rem",
              top: "0.3rem",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "rgba(0,0,0,.9)",
            fontSize: "36px",
            fontWeight: 300,
          }}
        >
          ${product.price}
        </Typography>
        <Typography
          sx={{
            color: "rgba(0,0,0,.9)",
            fontSize: "16px",
            fontWeight: 400,
          }}
        >
          en 12x $ {price12Payments}
          <Typography
            sx={{
              fontSize: "10px",
              display: "inline",
              position: "relative",
              top: "-4px",
            }}
          >
            {price12PaymentsDecimals}
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "#3483fa",
            fontSize: "14px",
          }}
        >
          ver los medios de pago
        </Typography>
      </Box>
      <Box sx={{ display: "flex", mt: "1rem" }}>
        <Box component="img" src={TruckIcon} width="27px" height="27px" />
        <Box sx={{ ml: "1rem" }}>
          <Typography
            sx={{
              color: "#00a650",
              fontSize: "16px",
            }}
          >
            Llega gratis
            <Typography
              sx={{
                color: "#00a650",
                fontSize: "16px",
                display: "inline",
                fontWeight: 500,
                marginLeft: "2.5px",
              }}
            >
              mañana
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "#3483fa",
              fontSize: "14px",
            }}
          >
            ver más formas de entrega
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: "1rem" }}>
        <Box component="img" src={LeftArrowIcon} width="27px" height="27px" />
        <Box sx={{ ml: "1rem" }}>
          <Typography
            sx={{
              color: "#00a650",
              fontSize: "16px",
            }}
          >
            Devolución gratis
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(0,0,0,.55)",
            }}
          >
            Tenés 30 días desde que lo recibís.
          </Typography>
          <Typography
            sx={{
              color: "#3483fa",
              fontSize: "14px",
            }}
          >
            Conocer más
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "rgba(0,0,0,.9)",
            mt: "1.5rem",
            fontWeight: 500,
          }}
        >
          Stock disponible
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "16px",
            color: "rgba(0,0,0,.9)",
            mt: "1.5rem",
          }}
        >
          Cantidad:
          <Typography
            sx={{
              fontSize: "16px",
              color: "rgba(0,0,0,.9)",
              mt: "1.5rem",
              ml: "3px",
              fontWeight: 500,
              display: "inline",
            }}
          >
            1 unidad
          </Typography>
          <Box
            component="img"
            src={UpsideDownArrow}
            width="15px"
            height="15px"
            sx={{ position: "relative", top: "4px", left: "3px" }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(0,0,0,.55)",
              mt: "1.5rem",
              display: "inline",
              marginLeft: "7px",
            }}
          >
            ({product.available_quantity} disponibles)
          </Typography>
        </Typography>
        <Box sx={{ mt: "1.5rem" }}>
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "#3483fa",
              height: "48px",
              fontSize: "16px",
              fontWeight: 500,
              color: "#fff",
              width: "100%",
              "&:hover": {
                backgroundColor: " #2968c8",
                transition: "background-color .2s ease-in",
              },
            }}
          >
            Comprar Ahora
          </Button>
          <Button
            sx={{
              mt: "1rem",
              textTransform: "none",
              backgroundColor: "rgba(65,137,230,.15)",
              height: "48px",
              fontSize: "16px",
              fontWeight: 500,
              color: "#3483fa",
              width: "100%",
              "&:hover": {
                backgroundColor: " rgba(65,137,230,.2)",
                transition: "background-color .2s ease-in",
              },
            }}
          >
            Agregar al Carrito
          </Button>
        </Box>
        <Box>
          <Box sx={{ mt: "1rem", display: "flex" }}>
            <Box
              component="img"
              src={ShieldIcon}
              width="21px"
              height="21px"
              sx={{ position: "relative" }}
            />
            <Box sx={{ display: "inline", ml: "3px" }}>
              <Typography
                sx={{
                  color: "#3483fa",
                  transition: "color .2s ease-in-out",
                  fontSize: "14px",
                }}
              >
                Compra protegida
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: "14px",
                    color: "rgba(0,0,0,.55)",
                  }}
                >
                  , recibí el producto que esperabas o te devolvemos tu dinero.
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: "1rem", display: "flex" }}>
            <Box
              component="img"
              src={TrophieIcon}
              width="21px"
              height="21px"
              sx={{ position: "relative" }}
            />
            <Box sx={{ display: "inline", ml: "3px" }}>
              <Typography
                sx={{
                  color: "#3483fa",
                  transition: "color .2s ease-in-out",
                  fontSize: "14px",
                }}
              >
                Mercado Puntos
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: "14px",
                    color: "rgba(0,0,0,.55)",
                  }}
                >
                  . Sumás 149 puntos
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceDetail;
