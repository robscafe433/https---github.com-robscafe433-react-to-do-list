import React from "react";
import ContactCard from "./Components/ContactCard";
import Header from "./Components/Header";
import MainComponent from "./Components/MainContent";
import Joke from "./Components/Joke";
import jokesData from "./jokesData";

import "./style.css";

function App() {
    const jokeComponents = jokesData.map((joke) => (
        <Joke
            key={joke.id}
            question={joke.question}
            punchLine={joke.punchLine}
        />
    ));

    return <div>{jokeComponents}</div>;
}

export default App;
