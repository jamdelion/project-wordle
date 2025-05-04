import React from "react";

function WordInput({ guesses, setGuesses, setUserAnswer }) {
  const [guess, setGuess] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newGuess = {
      word: guess,
      id: Math.random(),
    };
    setUserAnswer(newGuess.word);
    setGuesses([...guesses, newGuess]);
    console.log("Guessed word: ", newGuess.word);
    setGuess("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern=".{5}"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default WordInput;
