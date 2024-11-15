import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [ans, setAns] = useState([]);

  return (
    <>
      <h2 className="header">Quiz App</h2>
      <div className="container">
        {quizCompleted == true ? (
          <Result
            ans={ans}
            setQuizCompleted={setQuizCompleted}
            setAns={setAns}
          />
        ) : (
          <QuestionCard
            ans={ans}
            setAns={setAns}
            setQuizCompleted={setQuizCompleted}
          />
        )}
      </div>
    </>
  );
}

export default App;
