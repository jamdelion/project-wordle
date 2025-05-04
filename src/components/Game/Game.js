import React from "react";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import WordInput from "../WordInput/WordInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userAnswer, setUserAnswer] = React.useState("");
  return <WordInput userAnswer={userAnswer} setUserAnswer={setUserAnswer} />;
}

export default Game;
