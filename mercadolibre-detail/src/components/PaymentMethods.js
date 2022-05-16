import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AmericanExpressCard from "../assets/img/americanExpressCard.png";
import CabalDebitCard from "../assets/img/CabalDebitCard.png";
import visaDebitCard from "../assets/img/visaDebitCard.png";
import visaCard from "../assets/img/visaCard.png";
import Rapipago from "../assets/img/Rapipago.png";
import MasterCard from "../assets/img/masterCard.png";
import MasterCardDebit from "../assets/img/masterCardDebit.png";
import MercadoCreditCard from "../assets/img/mercadoCreditCard.png";
import NaranjaCard from "../assets/img/NaranjaCard.png";
import PagoFacil from "../assets/img/PagoFacil.png";

const PaymentMethods = () => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(0,0,0,.1)",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
    >
      <Box
        sx={{
          padding: "32px 16px",
          borderBottom: "1px solid rgba(0,0,0,.1)",
        }}
      >
        <Typography sx={{ fontSize: "18px", mb: "2rem" }}>
          Devolución gratis
        </Typography>
        <Typography
          sx={{ fontSize: "14px", mb: "2rem", color: "rgba(0,0,0,.55)" }}
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
        <Typography sx={{ fontSize: "18px", mb: "2rem" }}>Garantía</Typography>
        <Typography sx={{ fontSize: "16px", mb: "1rem" }}>
          Compra Protegida con Mercado Pago
        </Typography>
        <Typography
          sx={{ fontSize: "14px", mb: "1rem", color: "rgba(0,0,0,.55)" }}
        >
          Recibí el producto que esperabas o te devolvemos tu dinero
        </Typography>
        <Typography sx={{ fontSize: "16px", mb: "1rem" }}>
          Garantía del vendedor
        </Typography>
        <Typography
          sx={{ fontSize: "14px", mb: "1rem", color: "rgba(0,0,0,.55)" }}
        >
          Sin garantía
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#3483fa" }}>
          Conocer más sobre garantía
        </Typography>
      </Box>
      <Box sx={{ padding: "32px 16px" }}>
        <Typography sx={{ fontSize: "18px", mb: "1rem" }}>
          Medios de pago
        </Typography>
        <Typography sx={{ fontSize: "16px", marginY: "1rem" }}>
          Hasta 12 cuotas sin tarjeta
        </Typography>
        <Box component="img" src={MercadoCreditCard} />
        <Typography sx={{ fontSize: "16px", mt: "1rem" }}>
          Tarjetas de crédito
        </Typography>
        <Typography
          sx={{ fontSize: "14px", mb: "1rem", color: "rgba(0,0,0,.55)" }}
        >
          ¡Cuotas sin interés con bancos seleccionados!
        </Typography>
        <Box component="img" sx={{ mr: "1.5rem" }} src={visaCard} />
        <Box component="img" sx={{ mr: "1.5rem" }} src={AmericanExpressCard} />
        <Box component="img" sx={{ mr: "1.5rem" }} src={NaranjaCard} />
        <Box component="img" src={MasterCard} />
        <Typography sx={{ fontSize: "16px", marginY: "1rem" }}>
          Tarjetas de débito
        </Typography>
        <Box component="img" sx={{ mr: "1.5rem" }} src={visaDebitCard} />
        <Box component="img" sx={{ mr: "1.5rem" }} src={MasterCardDebit} />
        <Box component="img" src={CabalDebitCard} />
        <Typography sx={{ fontSize: "16px", marginY: "1rem" }}>
          Efectivo
        </Typography>
        <Box component="img" sx={{ mr: "1.5rem" }} src={PagoFacil} />
        <Box component="img" src={Rapipago} />
        <Typography sx={{ fontSize: "14px", color: "#3483fa", mt: "1rem" }}>
          Conocer otros medios de pago
        </Typography>
      </Box>
    </Box>
  );
};

export default PaymentMethods;
