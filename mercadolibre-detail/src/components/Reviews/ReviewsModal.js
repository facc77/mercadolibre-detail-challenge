import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../router/AppRouter";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import RatingBar from "../RatingBar";
import Review from "./Review";

const activeButton = {
  borderBottom: "2px solid #3483fa",
  color: "#3483fa",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  border: 0,
  outline: "none",
  borderRadius: "8px",
  boxShadow: 0,
  width: "60%",
  height: "80%",
  overflowYy: "initial !important",
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#3483fa",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});
const StyledButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "transparent",
  borderRadius: "6px 6px 0 0",
  color: "rgba(0,0,0,.9)",
  width: "33.3%",
  height: "48px ",
  fontSize: "16px",
  fontWeight: 500,
  padding: "6px 24px",
  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

  "&:hover": {
    color: " #3483fa",
    transition: "background-color .2s ease-in",
  },
});

const ReviewsModal = ({ open, setOpen, product }) => {
  const theme = useContext(ThemeContext);
  const handleClose = () => setOpen(false);

  const { reviews } = product;

  let ratingTotal = 0;
  reviews.forEach(({ rating }) => (ratingTotal += rating));
  let ratingAverage = (ratingTotal / reviews.length).toFixed(1);

  const [reviewList, setReviewList] = useState(reviews);
  const [reviewType, setReviewType] = useState("all");

  const handleClick = (reviewType) => {
    setReviewType(reviewType);
  };

  useEffect(() => {
    setReviewList(
      reviews.filter((review) => {
        if (reviewType === "all") {
          return product;
        } else if (reviewType === "positive" && review.rating > 3) {
          return product;
        } else if (reviewType === "negative" && review.rating < 4) {
          return product;
        } else {
          return null;
        }
      })
    );
    // eslint-disable-next-line
  }, [reviewType]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            height: "100%",
            overflowY: "auto",
            backgroundColor: theme ? "#2a2a2a" : "#fff",
            borderRadius: "10px",
            overflowX: "hidden",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              id="modal-modal-title"
              sx={{
                fontSize: "32px",
                fontWeight: 500,
                padding: "3rem ",
                color: theme ? "#fff" : "#000",
              }}
            >
              Opiniones sobre {product.title}
            </Typography>
            <Box>
              <CloseRoundedIcon
                sx={{
                  position: "relative",
                  marginRight: "1.5rem",
                  width: "40px",
                  height: "40px",
                  color: "#3483fa",
                  cursor: "pointer",
                }}
                onClick={() => handleClose()}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  fontSize: "64px",
                  fontWeight: 300,
                  color: theme ? "#fff" : "rgba(0, 0, 0, 0.9)",
                }}
              >
                {ratingAverage}
              </Box>
              <StyledRating
                name="read-only"
                value={parseInt(ratingAverage)}
                readOnly
                size="large"
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme ? "#fff" : "rgba(0, 0, 0, 0.55)",
                }}
              >
                Promedio entre {reviews.length} opiniones
              </Typography>
            </Box>
            <Box sx={{ width: "60%", marginLeft: "3.5rem" }}>
              <RatingBar ratingStar={5} product={product} />
              <RatingBar ratingStar={4} product={product} />
              <RatingBar ratingStar={3} product={product} />
              <RatingBar ratingStar={2} product={product} />
              <RatingBar ratingStar={1} product={product} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "90%",
                display: "flex",
                justifyContent: "space-around",
                marginTop: "2rem",
                padding: "1rem 2rem 0rem 2rem",
              }}
            >
              <StyledButton
                style={reviewType === "all" ? activeButton : null}
                sx={{ color: theme ? "#fff" : "rgba(0, 0, 0, 0.55)" }}
                onClick={() => {
                  handleClick("all");
                }}
              >
                Todas
              </StyledButton>
              <StyledButton
                style={reviewType === "positive" ? activeButton : null}
                sx={{ color: theme ? "#fff" : "rgba(0, 0, 0, 0.55)" }}
                onClick={() => {
                  handleClick("positive");
                }}
              >
                Positivas
              </StyledButton>
              <StyledButton
                style={reviewType === "negative" ? activeButton : null}
                sx={{ color: theme ? "#fff" : "rgba(0, 0, 0, 0.55)" }}
                onClick={() => {
                  handleClick("negative");
                }}
              >
                Negativas
              </StyledButton>
            </Box>
            <Box padding="3rem">
              {reviewList.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReviewsModal;
