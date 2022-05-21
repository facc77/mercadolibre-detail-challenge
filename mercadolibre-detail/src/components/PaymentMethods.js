import React, { useContext } from "react";
import { ThemeContext } from "../router/AppRouter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AmericanExpressCard from "../assets/img/cards/americanExpressCard.png";
import CabalDebitCard from "../assets/img/cards/CabalDebitCard.png";
import visaDebitCard from "../assets/img/cards/visaDebitCard.png";
import visaCard from "../assets/img/cards/visaCard.png";
import Rapipago from "../assets/img/cards/Rapipago.png";
import MasterCard from "../assets/img/cards/masterCard.png";
import MasterCardDebit from "../assets/img/cards/masterCardDebit.png";
import MercadoCreditCard from "../assets/img/cards/mercadoCreditCard.png";
import NaranjaCard from "../assets/img/cards/NaranjaCard.png";
import PagoFacil from "../assets/img/cards/PagoFacil.png";

const PaymentMethods = () => {
  const theme = useContext(ThemeContext);

  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          border: "1px solid rgba(0,0,0,.1)",
          borderRadius: "8px",
          backgroundColor: theme ? "#232323" : "",
          position: "relative",
          bottom: { xs: 0, md: "19rem" },
          width: { xs: "100%", md: "90%" },
        }}
      >
        <Box
          sx={{
            padding: "32px 16px",
            borderBottom: "1px solid rgba(0,0,0,.1)",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              mb: "2rem",
              color: theme ? "#fff" : "",
            }}
          >
            Devolución gratis
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              mb: "2rem",
              color: theme ? "#fff" : "rgba(0,0,0,.55)",
            }}
          >
            Tenés 30 días desde que recibís el producto para devolverlo. ¡No
            importa el motivo!
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#3483fa" }}>
            Conocer más sobre devoluciones
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "32px 16px",
            borderBottom: "1px solid rgba(0,0,0,.1)",
          }}
        >
          <Typography
            sx={{ fontSize: "18px", mb: "2rem", color: theme ? "#fff" : "" }}
          >
            Garantía
          </Typography>
          <Typography
            sx={{ fontSize: "16px", mb: "1rem", color: theme ? "#fff" : "" }}
          >
            Compra Protegida con Mercado Pago
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              mb: "1rem",
              color: theme ? "#fff" : "rgba(0,0,0,.55)",
            }}
          >
            Recibí el producto que esperabas o te devolvemos tu dinero
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              mb: "1rem",
              color: theme ? "#fff" : "",
            }}
          >
            Garantía del vendedor
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              mb: "1rem",
              color: theme ? "#fff" : "rgba(0,0,0,.55)",
            }}
          >
            Sin garantía
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#3483fa" }}>
            Conocer más sobre garantía
          </Typography>
        </Box>
        <Box sx={{ padding: "32px 16px" }}>
          <Typography
            sx={{ fontSize: "18px", mb: "1rem", color: theme ? "#fff" : "" }}
          >
            Medios de pago
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              marginY: "1rem",
              color: theme ? "#fff" : "",
            }}
          >
            Hasta 12 cuotas sin tarjeta
          </Typography>
          <Box component="img" src={MercadoCreditCard} />
          <Typography
            sx={{ fontSize: "16px", mt: "1rem", color: theme ? "#fff" : "" }}
          >
            Tarjetas de crédito
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              mb: "1rem",
              color: theme ? "#fff" : "rgba(0,0,0,.55)",
            }}
          >
            ¡Cuotas sin interés con bancos seleccionados!
          </Typography>
          <Box component="img" sx={{ mr: "1.5rem" }} src={visaCard} />
          <Box
            component="img"
            sx={{ mr: "1.5rem" }}
            src={AmericanExpressCard}
          />
          <Box component="img" sx={{ mr: "1.5rem" }} src={NaranjaCard} />
          <Box component="img" src={MasterCard} />
          <Typography
            sx={{
              fontSize: "16px",
              marginY: "1rem",
              color: theme ? "#fff" : "",
            }}
          >
            Tarjetas de débito
          </Typography>
          <Box component="img" sx={{ mr: "1.5rem" }} src={visaDebitCard} />
          <Box component="img" sx={{ mr: "1.5rem" }} src={MasterCardDebit} />
          <Box component="img" src={CabalDebitCard} />
          <Typography
            sx={{
              fontSize: "16px",
              marginY: "1rem",
              color: theme ? "#fff" : "",
            }}
          >
            Efectivo
          </Typography>
          <Box component="img" sx={{ mr: "1.5rem" }} src={PagoFacil} />
          <Box component="img" src={Rapipago} />
          <Typography sx={{ fontSize: "14px", color: "#3483fa", mt: "1rem" }}>
            Conocer otros medios de pago
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default PaymentMethods;
