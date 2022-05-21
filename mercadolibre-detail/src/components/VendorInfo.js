import React, { useContext } from "react";
import { ThemeContext } from "../router/AppRouter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import clockIconDark from "../assets/img/clockIconDark.png";
import talkIconDark from "../assets/img/talkIconDark.png";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import reviewBar from "../assets/img/reviewBar.png";
import talkIcon from "../assets/img/talkIcon.png";
import clockIcon from "../assets/img/clockIcon.png";

const VendorInfo = () => {
  const theme = useContext(ThemeContext);

  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          width: "368px",
          height: "380px",
          padding: "32px 16px",
          border: "1px solid rgba(0,0,0,.1)",
          borderRadius: "8px",
          marginTop: "1rem",
          backgroundColor: theme ? "#232323" : "",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: theme ? "#fff" : "rgba(0,0,0,.9)",
            marginBottom: "28px",
          }}
        >
          Información sobre el vendedor
        </Typography>
        <Box sx={{ display: "flex", marginBottom: "28px" }}>
          <LocationOnOutlinedIcon
            sx={{ height: "25px", width: "23px", color: theme ? "#fff" : "" }}
          />
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: theme ? "#fff" : "rgba(0,0,0,.9)",
              }}
            >
              Ubicación
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: theme ? "#fff" : "rgba(0,0,0,.9)",
              }}
            >
              Balvanera, Capital Federal
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", marginBottom: "1rem" }}>
          <WorkspacePremiumOutlinedIcon
            sx={{ height: "25px", width: "23px", color: "#00a650" }}
          />
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
                color: theme ? "#fff" : "rgba(0,0,0,.55)",
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
                color: theme ? "#fff" : "#000",
              }}
            >
              4076
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: theme ? "#fff" : "rgba(0,0,0,.9)",
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
            <Box
              component="img"
              src={theme ? talkIconDark : talkIcon}
              width="38px"
              height="35px"
            />
            <Typography
              sx={{
                fontSize: "12px",
                color: theme ? "#fff" : "rgba(0,0,0,.9)",
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
            <Box
              component="img"
              src={theme ? clockIconDark : clockIcon}
              width="38px"
              height="35px"
            />

            <Typography
              sx={{
                fontSize: "12px",
                color: theme ? "#fff" : "rgba(0,0,0,.9)",
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
    </Grid>
  );
};

export default VendorInfo;
