import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import blackLocationLogo from "../assets/img/blackLocationLogo.png";
import medalIcon from "../assets/img/medalIcon.png";
import reviewBar from "../assets/img/reviewBar.png";
import talkIcon from "../assets/img/talkIcon.png";
import clockIcon from "../assets/img/clockIcon.png";

const VendorInfo = () => {
  return (
    <Box
      sx={{
        width: "368px",
        height: "380px",
        padding: "32px 16px",
        border: "1px solid rgba(0,0,0,.1)",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
    >
      <Typography
        sx={{ fontSize: "18px", color: "rgba(0,0,0,.9)", marginBottom: "28px" }}
      >
        Información sobre el vendedor
      </Typography>
      <Box sx={{ display: "flex", marginBottom: "28px" }}>
        <Box
          component="img"
          src={blackLocationLogo}
          height="25px"
          width="23px"
        />
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: "rgba(0,0,0,.9)",
            }}
          >
            Ubicación
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(0,0,0,.55)",
            }}
          >
            Balvanera, Capital Federal
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", marginBottom: "1rem" }}>
        <Box component="img" src={medalIcon} height="25px" width="23px" />
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#00a650",
            }}
          >
            MercadoLíder Platinum
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "rgba(0,0,0,.55)",
            }}
          >
            ¡Es uno de los mejores del sitio!
          </Typography>
        </Box>
      </Box>
      <Box component="img" src={reviewBar} width="100%" />
      <Box sx={{ display: "flex", mt: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "33%",
            borderRight: "1px solid rgba(0,0,0,.1)",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              color: "#000",
            }}
          >
            4076
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "rgba(0,0,0,.9)",
              textAlign: "center",
            }}
          >
            Ventas en los últimos 60 días
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "33%",
            borderRight: "1px solid rgba(0,0,0,.1)",
          }}
        >
          <Box component="img" src={talkIcon} width="38px" height="35px" />
          <Typography
            sx={{
              fontSize: "12px",
              color: "rgba(0,0,0,.9)",
              textAlign: "center",
            }}
          >
            Brinda buena atención
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "33%",
          }}
        >
          <Box component="img" src={clockIcon} width="38px" height="35px" />

          <Typography
            sx={{
              fontSize: "12px",
              color: "rgba(0,0,0,.9)",
              textAlign: "center",
            }}
          >
            Despacha sus productos a tiempo
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#2968c8",
          marginY: "1rem",
        }}
      >
        Ver más datos de este vendedor
      </Typography>
    </Box>
  );
};

export default VendorInfo;
