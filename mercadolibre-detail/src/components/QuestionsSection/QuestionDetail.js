import React, { useContext } from "react";
import { ThemeContext } from "../../router/AppRouter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AnswerImage from "../../assets/img/answerImage.png";
import AnswerImageDark from "../../assets/img/answerImageDark.png";

const QuestionDetail = ({ question }) => {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Typography sx={{ fontSize: "16px", color: theme ? "#fff" : "" }}>
        {question.question}
      </Typography>
      <Box sx={{ mb: "1rem", ml: "0.5rem" }}>
        {question.answer ? (
          <>
            <Box
              component="img"
              src={theme ? AnswerImageDark : AnswerImage}
              sx={{
                width: "24px",
                height: "24px",
                position: "relative",
                top: "4px",
              }}
            />
            <Typography
              sx={{
                display: "inline",
                color: theme ? "#fff" : "rgba(0,0,0,.55)",
              }}
            >
              {question.answer}
            </Typography>
            <Typography
              sx={{
                display: "inline",
                color: theme ? "#fff" : "rgba(0,0,0,.45)",
                fontSize: "14px",
                marginLeft: "0.5rem",
              }}
            >
              {question.answerDate}
            </Typography>
          </>
        ) : null}
      </Box>
    </Box>
  );
};

export default QuestionDetail;
