import React from "react";
import "../Styles/mystyle.css";

function CalculateScore(props) {
  const { name, school, total, goal } = props;
  const average = ((total / goal) * 100).toFixed(2);

  return (
    <div className="score-container">
      <h1>Student Score Calculator</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>School:</strong> {school}
      </p>
      <p>
        <strong>Total:</strong> {total}
      </p>
      <p>
        <strong>Goal:</strong> {goal}
      </p>
      <p>
        <strong>Average Score:</strong> {average}%
      </p>
    </div>
  );
}

export default CalculateScore;
