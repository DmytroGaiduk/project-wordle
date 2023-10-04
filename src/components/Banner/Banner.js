import React from "react";

function Banner({ type, answer, count, maxCount }) {
  return (
    <div className={`banner ${type}`}>
      {type === "happy" && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {count} guesses of {maxCount}</strong>.
        </p>
      )}
      {type === "sad" && (
        <div>
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )}
    </div>
  );
}

export default Banner;
