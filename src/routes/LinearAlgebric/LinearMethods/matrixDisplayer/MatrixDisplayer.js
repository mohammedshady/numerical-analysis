import React from "react";

const MatrixDisplayer = ({ matrix, label, length, equation }) => {
  const leftBracket = (
    <div className="bracket-container">
      <span className="dash"></span>
      <span className="line"></span>
      <span className="dash"></span>
    </div>
  );
  const rightBracket = (
    <div className="bracket-container">
      <span className="dash"></span>
      <span className="line align-self-end"></span>
      <span className="dash"></span>
    </div>
  );

  const oneColMatrix = (
    <div className="">
      {length === 1 &&
        matrix.map((number, i) => (
          <label key={i} className="matrix-1-cell">
            {number}
          </label>
        ))}
    </div>
  );

  const threeColMatrix = (
    <div className="matrix-3-numbers">
      {length === 3 &&
        matrix.map((row, i) => {
          return row.map((number, j) => {
            return (
              <label key={j} className="matrix-cell">
                {parseFloat(number?.toFixed(2))}
              </label>
            );
          });
        })}
    </div>
  );

  const fourColMatrix = (
    <div className="matrix-numbers">
      {length === 4 &&
        matrix.map((row, i) => {
          return row.map((number, j) => {
            return (
              <label key={j} className="matrix-cell">
                {parseFloat(number?.toFixed(2))}
              </label>
            );
          });
        })}
    </div>
  );

  return (
    <>
      <div className="step-card">
        <div className="step-label">{label}</div>
        <div className="step-equation">{equation && equation}</div>
        <div className="step-matrix">
          {leftBracket}

          {length === 1 && oneColMatrix}
          {length === 3 && threeColMatrix}
          {length === 4 && fourColMatrix}

          {rightBracket}
        </div>
      </div>
    </>
  );
};
export default MatrixDisplayer;
