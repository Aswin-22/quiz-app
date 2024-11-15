import React, { useState } from "react";
import { quizData } from "../data";

function QuestionCard({ ans, setAns, setQuizCompleted }) {
  const [queIndex, setQueIndex] = useState(0);

  const handleNext = () => {
    if (queIndex + 1 == quizData.length) {
      setQuizCompleted(true);
    } else {
      setQueIndex(queIndex + 1);
    }
    setAns([...ans, 0]);
  };

  const handleAns = (option) => {
    if (quizData[queIndex][option] === quizData[queIndex]["correctAnswer"]) {
      setAns([...ans, 1]);
    } else {
      setAns([...ans, -1]);
    }

    if (queIndex + 1 == quizData.length) {
      setQuizCompleted(true);
    } else {
      setQueIndex(queIndex + 1);
    }
  };

  return (
    <div className="card">
      <h3 className="quiz-no">Question {queIndex + 1}</h3>
      <hr />
      <div className="ques">{quizData[queIndex]["question"]}</div>
      <div className="answers">
        <button
          onClick={() => {
            handleAns("a");
          }}
          className="ans-btn"
        >
          {quizData[queIndex]["a"]}
        </button>
        <button
          onClick={() => {
            handleAns("b");
          }}
          className="ans-btn"
        >
          {quizData[queIndex]["b"]}
        </button>
        <button
          onClick={() => {
            handleAns("c");
          }}
          className="ans-btn"
        >
          {quizData[queIndex]["c"]}
        </button>
        <button
          onClick={() => {
            handleAns("d");
          }}
          className="ans-btn"
        >
          {quizData[queIndex]["d"]}
        </button>
      </div>
      <div className="btn-section">
        <button className="next-btn" onClick={handleNext}>
          <span class="button_top">Next &gt; </span>
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
