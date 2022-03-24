import React from "react";

const Joke = (props) => {
  return (
    <div>
      <h1>{props.question}</h1>
      <h1>{props.punchLine}</h1>
    </div>
  );
};

export default Joke;
