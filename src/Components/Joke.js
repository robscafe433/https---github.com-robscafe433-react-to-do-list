import React from "react";

const Joke = (props) => {
    return (
        <div>
            <h2>Question is: {props.question}</h2>
            <h2>Answer is: {props.answer}</h2>
        </div>
    );
};
export default Joke;
