import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "./../../constants";

function GuessList({ guesses }) {
  const EMPTY_WORD = { word: "", id: Math.random() };

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guess, index) => {
        if (guesses[index])
          return <Guess key={guess.id} guess={guesses[index]} />;
        return <Guess key={guess.id} guess={EMPTY_WORD} />;
      })}
    </div>
  );
}

export default GuessList;
