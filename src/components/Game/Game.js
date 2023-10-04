import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessBoard from "../GuessBoard/GuessBoard";
import Banner from "../Banner/Banner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessRes, setGuessRes] = React.useState([]);
  const [isWinner, setIsWinner] = React.useState(false);
  const [isLoser, setIsLoser] = React.useState(false);

  return (
    <>
      {isWinner && <Banner type={'happy'} count={guessRes.length} maxCount={NUM_OF_GUESSES_ALLOWED} /> }
      {isLoser && <Banner type={'sad'} answer={answer} /> }                    

      <GuessBoard
        answer={answer}
        results={guessRes}
        isWinner={isWinner}
        setIsWinner={setIsWinner}
        isLoser={isLoser}
        setIsLoser={setIsLoser}
      ></GuessBoard>

      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessRes={guessRes}
        setGuessRes={setGuessRes}
        disabled={isWinner || isLoser}
      ></GuessInput>

      {/* <GuessResults guessRes={guessRes}></GuessResults> */}
    </>
  );
}

export default Game;
