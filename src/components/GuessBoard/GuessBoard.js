import React from 'react';
import {range} from '../../utils'

import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import GuessWord from '../GuessWord'


function GuessBoard({results}) {
  const answers = results.slice(0, NUM_OF_GUESSES_ALLOWED);

  return <div className="guess-results">
            {
              range(0,NUM_OF_GUESSES_ALLOWED).map((index)=>{
                  if(answers[index]){
                    return <GuessWord key={answers[index].id} word={answers[index].word}></GuessWord>
                  } else {
                    return <GuessWord  key={crypto.randomUUID()} word=""></GuessWord>
                  }
              })
            }
        </div>;
}

export default GuessBoard;
