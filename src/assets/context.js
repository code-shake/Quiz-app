import React, { useState, createContext } from "react";
import Data from "../assets/data.json";

export const QuestionContext = createContext();

export const QuestionProvider = (props) => {
  const [questions, setQuestions] = useState([Data]);
  const [filteredQues, setFilteredQues] = useState();

  <QuestionContext.Provider value={questions}>
    {props.children}
  </QuestionContext.Provider>;
};
