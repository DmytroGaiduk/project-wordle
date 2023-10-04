import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GuessBoard from '../GuessBoard/GuessBoard';

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState(''); 
  const [guessRes, setGuessRes ] = React.useState([])

  return <>
    <GuessBoard results={guessRes}></GuessBoard>
    <GuessInput guess={guess} 
                setGuess={setGuess}
                guessRes={guessRes}
                setGuessRes={setGuessRes}
                ></GuessInput>

    <GuessResults guessRes={guessRes}></GuessResults>
  </>
}

export default Game;
