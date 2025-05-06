import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p key={guess.id} className="guess">
      {range(5).map((letter, index) => (
        <span key={index} className="cell">
          {guess.word.split("")[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
