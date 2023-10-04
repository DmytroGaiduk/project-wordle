import { range } from "../../utils";

function GuessWord({ letters }) {
  let wordLetters = [];

  if (letters.length > 0) {
    wordLetters = letters.map((obj) => {
      return (
        <span className={`cell ${obj.status}`} key={crypto.randomUUID()}>
          {obj.letter}
        </span>
      );
    });
  }

  const emptyLetters = range(0, 5).map((el) => (
    <span className="cell" key={crypto.randomUUID()}>
      &nbsp;
    </span>
  ));

  return (
    <>
      {
        <div className="guess">
          {letters.length > 0 ? wordLetters : emptyLetters}
        </div>
      }
    </>
  );
}

export default GuessWord;
