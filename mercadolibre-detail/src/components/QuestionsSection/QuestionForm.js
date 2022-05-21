import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const QuestionForm = ({ questions, setQuestions }) => {
  const FormButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    backgroundColor: "#3483fa",
    height: "48px ",
    fontSize: "16px",
    fontWeight: 500,
    color: "#fff",
    padding: "6px 24px",
    "&:hover": {
      backgroundColor: " #2968c8",
      transition: "background-color .2s ease-in",
    },
  }));

  const [errorMessage, setErrorMessage] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let question = {
      question: newQuestion,
      answer: null,
      answerDate: null,
    };
    if (newQuestion === "") {
      setErrorMessage(true);
    } else {
      setQuestions([...questions, question]);
      setNewQuestion("");
    }
  };
  return (
    <Box>
      <Box
        component="form"
        sx={{ display: "flex" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Box
          component="input"
          type="text"
          placeholder="Escribí tu pregunta..."
          value={newQuestion}
          onChange={(e) => {
            setNewQuestion(e.target.value);
            setErrorMessage(false);
          }}
          sx={{
            color: "rgba(0,0,0,.55)",
            borderRadius: "0.375em",
            fontSize: " 16px",
            border: errorMessage ? "1px solid red" : "1px solid lightgrey",
            width: "75%",
            paddingLeft: "1rem",
            marginRight: "0.75rem",
            height: "48px",
            "&:focus": {
              border: "2px solid #2968c8 !important",
              outline: "none",
            },
            "&::placeholder": {
              color: "rgba(0,0,0,.55)",
            },
          }}
        />
        <FormButton type="submit">Preguntar</FormButton>
      </Box>
      {errorMessage ? (
        <Box sx={{ position: "relative" }}>
          <Typography sx={{ color: "red", position: "absolute" }}>
            debe ingresar un valor
          </Typography>
        </Box>
      ) : null}
    </Box>
  );
};

export default QuestionForm;
