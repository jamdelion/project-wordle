import React from "react";

function WordInput({ userAnswer, setUserAnswer }) {
  const [guess, setGuess] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUserAnswer(guess);
    console.log("Guessed word: ", guess);
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
