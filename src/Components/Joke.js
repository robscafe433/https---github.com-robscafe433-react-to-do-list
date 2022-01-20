import React from "react";

const Joke = (props) => {
    return (
        <div>
            <h1>Question: {props.question}</h1>
            <h1>Punchline: {props.punchLine}</h1>
            <br /><br /><br />
        </div>
    );
};

export default Joke;
