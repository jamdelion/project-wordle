import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const arrayOfLetters = guess.word.split("");

  const getClassNamesFromIndex = (index) => {
    const letterResult = guess.result?.[index];
    return `cell ${letterResult?.status}`;
  };

  return (
    <p key={guess.id} className="guess">
      {range(5).map((index) => (
        <span key={index} className={getClassNamesFromIndex(index)}>
          {arrayOfLetters[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
