import React from "react";
import jokesData from "../jokesData";

const Joke = (props) => {
    const jokesComponent2 = jokesData.map((joke) => {
        return (
            <div>
                {joke.question}
                <h2>The answer is: {props.answer}</h2>
            </div>
        );
    });

    return <div>{jokesComponent2}</div>;
};

export default Joke;
