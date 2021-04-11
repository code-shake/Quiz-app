import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { QuestionContext } from "../assets/context";
import Data from "../assets/data.json";

export default function Home() {
  const [filterQus, setFilterQus] = useState();
  const value = useContext(QuestionContext);
  console.log(value);

  const handleClick = (e) => {
    setFilterQus(Data.filter((item) => item.id === e.target.value));
  };

  return (
    <div className="wrapper" id="home">
      <h1>Quiz!!</h1>
      <p>
        Choose one from the categories below and see how many Questions can you
        answer correctly out of 5 Questions
      </p>
      <div className="homeChoose">
        <button value="1" onClick={handleClick}>
          Easy
        </button>
        <button value="2" onClick={handleClick}>
          Medium
        </button>
        <button value="3" onClick={handleClick}>
          Hard
        </button>
      </div>
      <Link to={{ pathname: "/Questions", state: { questions: filterQus } }}>
        <button className="homeButton">Start Quiz!</button>
      </Link>
    </div>
  );
}
