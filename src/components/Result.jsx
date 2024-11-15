import { quizData } from "../data";

function Result({ ans, setQuizCompleted, setAns }) {
  const correctAnswer = ans.filter((score) => score === 1).length;
  const WrongAnswer = ans.filter((score) => score === -1).length;
  const Answered = correctAnswer + WrongAnswer;
  const unAnswered = quizData.length - Answered;
  let resultColor = "";

  if (correctAnswer <= 1) resultColor = "#EF4444";
  else if (correctAnswer <= 3) resultColor = "#FEA82F";
  else if (correctAnswer <= 5) resultColor = "#3cb35a";

  const handleRestart = () => {
    setAns([]);
    setQuizCompleted(false);
  };

  return (
    <div className="result-container">
      <div className="result-head">
        <h2 className="result-header">Results</h2>
        <hr />
      </div>
      <div className="score-card" style={{ background: resultColor }}>
        <div className="score">{correctAnswer} / 5</div>
      </div>
      <div className="table-content">
        <table>
          <tbody>
            <tr>
              <td>Answered Questions: </td>
              <td>{Answered}</td>
            </tr>
            <tr>
              <td>Unanswered questions: </td>
              <td>{unAnswered}</td>
            </tr>
            <tr>
              <td>Total questions: </td>
              <td>5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={handleRestart} className="next-btn">
        <span class="button_top">Restart Quiz ! </span>
      </button>
    </div>
  );
}

export default Result;
