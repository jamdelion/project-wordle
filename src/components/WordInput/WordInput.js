import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function WordInput({
  guesses,
  setGuesses,
  setUserAnswer,
  answer,
  setGameOver,
  gameOver
}) {
  const [guess, setGuess] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newGuess = {
      word: guess,
      id: Math.random(),
      result: checkGuess(guess, answer),
    };
    setUserAnswer(newGuess.word);
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
    setGuess("");
    if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED || guess === answer) {
      setGameOver(true);
      return;
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern=".{5}"
        disabled={gameOver}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default WordInput;
