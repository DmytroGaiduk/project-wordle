import {range} from '../../utils'

function GuessWord({word}) {
  return  <>
    { 
      <div className="guess">
        {
        (word.length >0) ? 
            word.split('').map((letter)=> <span className='cell' key={crypto.randomUUID()}>{letter}</span>) : 
            range(0,5).map(el => <span className='cell' key={crypto.randomUUID()}>&nbsp;</span>)
        }
      </div>
    }
  </>

}
 
export default GuessWord;


