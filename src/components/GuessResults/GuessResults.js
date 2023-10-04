import React from 'react';

function GuessResults({guessRes}) {

  return(
    <>
      <h4>Guess history</h4>
      <div className="guess-results">
        { guessRes.length > 0 && 
              guessRes.map((guess)=>{
                return <p key={guess.id} className="guess">{guess.word}</p>
              })
        }
        {guessRes.length === 0 && <div>No guessess yet! :(</div>}
      </div>
    </>
  );
}

export default GuessResults;
