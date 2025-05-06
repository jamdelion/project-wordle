import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessList from "../GuessList";
import WordInput from "../WordInput/WordInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [latestUserAnswer, setLatestUserAnswer] = React.useState("");
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <GuessList guesses={guesses} />
      <WordInput
        setUserAnswer={setLatestUserAnswer}
        setGuesses={setGuesses}
        guesses={guesses}
        answer={answer}
      />
    </>
  );
}

export default Game;
