import React, { useContext, useState } from "react";
import { ThemeContext } from "../../router/AppRouter";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import product from "../../assets/mock";
import QuestionDetail from "./QuestionDetail";
import QuestionForm from "./QuestionForm";

const QuestionsAndAnswers = () => {
  const theme = useContext(ThemeContext);

  const CustomButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    backgroundColor: "rgba(65,137,230,.15)",
    marginRight: "0.7rem",
  }));

  const [questions, setQuestions] = useState(product.questions);

  return (
    <Grid item xs={12} md={8}>
      <Box
        sx={{
          marginX: "3rem",
          position: "relative",
          bottom: { xs: 0, md: "27rem" },
        }}
      >
        <Typography sx={{ fontSize: "24px", color: theme ? "#fff" : "" }}>
          Preguntas y respuestas
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              marginY: "1rem",
              color: theme ? "#fff" : "",
            }}
          >
            Qué querés saber?
          </Typography>
          <CustomButton>Costo y tiempo de envío</CustomButton>
          <CustomButton>Devoluciones gratis</CustomButton>
          <CustomButton>Medios de pago y promociones</CustomButton>
          <CustomButton>Garantía</CustomButton>

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              marginY: "1rem",
              color: theme ? "#fff" : "",
            }}
          >
            Preguntale al vendedor
          </Typography>

          <QuestionForm questions={questions} setQuestions={setQuestions} />

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 500,
              marginY: "2rem",
              color: theme ? "#fff" : "",
            }}
          >
            Últimas realizadas
          </Typography>
          {questions.map((question) => (
            <QuestionDetail key={question.question} question={question} />
          ))}
        </Box>
      </Box>
    </Grid>
  );
};

export default QuestionsAndAnswers;
