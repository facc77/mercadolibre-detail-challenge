import React, { useContext } from "react";
import { ThemeContext } from "../../router/AppRouter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const Review = ({ review }) => {
  const theme = useContext(ThemeContext);

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#3483fa",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  const likesStyle = {
    color: theme ? "#fff" : "rgba(0,0,0,.9)",
    marginRight: "0.5rem",
  };

  return (
    <Box sx={{ width: "100%", marginTop: "2rem" }}>
      <StyledRating
        name="read-only"
        value={parseInt(review.rating)}
        readOnly
        size="medium"
      />
      <Typography sx={{ fontWeight: 500, color: theme ? "#fff" : "#000" }}>
        {review.title}
      </Typography>
      <Typography sx={{ color: theme ? "#fff" : "#000" }}>
        {review.comments}
      </Typography>
      <Box sx={{ display: "flex", mt: "0.5rem" }}>
        <ThumbUpOffAltOutlinedIcon style={likesStyle} />
        <Typography style={likesStyle}>{review.likes}</Typography>
        <ThumbDownOutlinedIcon style={likesStyle} />
        <Typography style={likesStyle}>{review.dislikes}</Typography>
      </Box>
    </Box>
  );
};

export default Review;
