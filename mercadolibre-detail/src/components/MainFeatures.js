import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import product from "../assets/mock";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const MainFeatures = () => {
  const mainFeatures = product.attributes.filter(
    (atribute) => atribute.attribute_group_id === ""
  );
  const subFeatures = product.attributes.filter(
    (atribute) => atribute.attribute_group_id === "OTHERS"
  );
  return (
    <Box
      sx={{
        paddingY: "1.5rem",
        marginLeft: "3rem",
        borderBottom: " 1px solid",
        borderImage:
          "linear-gradient(to right, rgba(0,0,0,.1) 90%, transparent 20%) 100% 1",
      }}
    >
      <Typography sx={{ fontSize: "24px", marginBottom: "1.5rem" }}>
        Características principales
      </Typography>
      <Table sx={{ width: "90%", borderRadius: "10px" }}>
        {mainFeatures.map((feature) => (
          <TableRow
            key={feature.id}
            sx={{
              textAlign: "start",
              padding: "15px 16px 15px 16px",
            }}
          >
            <TableCell
              sx={{
                padding: "15px 16px 15px 16px",
                border: 0,
                fontSize: "16px",
                fontWeight: 500,
                width: "30%",
                backgroundColor:
                  feature.value_id % 2 === 0
                    ? "rgb(245, 245, 245)"
                    : "rgba(0,0,0,.1)",
              }}
            >
              {feature.name}
            </TableCell>
            <TableCell
              sx={{
                fontSize: "16px",
                backgroundColor:
                  feature.value_id % 2 !== 0 ? "rgb(245, 245, 245)" : "#fff",
                border: 0,
              }}
            >
              {feature.value_name}
            </TableCell>
          </TableRow>
        ))}
      </Table>
      <Typography sx={{ fontSize: "20px", marginY: "1.5rem" }}>
        Otras características
      </Typography>
      <Box
        sx={{
          columnCount: 2,
        }}
      >
        {subFeatures.map((feature) => (
          <Typography
            sx={{ fontSize: "14px", fontWeight: 600, marginY: "5px" }}
          >
            {feature.name} :
            <Box component="span" sx={{ fontWeight: 400 }}>
              {feature.value_name}
            </Box>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default MainFeatures;
