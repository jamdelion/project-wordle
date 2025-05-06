import React from "react";

function Banner({ type, numOfPlayerGuesses, answer }) {
  return (
    <div className={`${type} banner`}>
      {type === "happy" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numOfPlayerGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
