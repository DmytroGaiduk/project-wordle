import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessWord from "../GuessWord";

function GuessBoard({ results, answer, setIsWinner, setIsLoser, isWinner }) {
  const answers = results.slice(0, NUM_OF_GUESSES_ALLOWED);

  if ((results.length >= NUM_OF_GUESSES_ALLOWED) && !isWinner ){
    setIsLoser(true)
  }

  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {

        if (answers[index]) {

          //check win condition
          if (answers[index].word === answer) {
            setIsWinner(true);
          }

          return (
            <GuessWord
              key={answers[index].id}
              letters={checkGuess(answers[index].word, answer)}
            ></GuessWord>
          );
        } else {
          return <GuessWord key={crypto.randomUUID()} letters=""></GuessWord>;
        }
      })}
    </div>
  );
}

export default GuessBoard;
