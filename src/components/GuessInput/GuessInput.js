import React from 'react';

function GuessInput({guess, setGuess, guessRes, setGuessRes}) {

  const onGuessChange = (e) =>{
    let userInput = e.target.value.toUpperCase();
    setGuess(userInput);
  }

  const onFormSubmit = (e) =>{
    e.preventDefault();

    const nextResult = [...guessRes];
    
    nextResult.push({
      id:crypto.randomUUID(),
      word: guess
    })

    console.info("Guess is: ", guess)

    setGuessRes(nextResult);
    setGuess('');
  }

  return (
      <form className="guess-input-wrapper" onSubmit={onFormSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" 
          pattern="[a-zA-Z]{5}"
          value={guess} onChange={onGuessChange} />
      </form>
    
  )
}

export default GuessInput;
