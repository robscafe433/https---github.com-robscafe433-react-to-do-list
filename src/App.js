import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import MainComponent from "./Components/MainContent";
import "./style.css";

const App = () => {
    return (
        <div>
            <Header />
            <MainComponent />
        </div>
    );
};

export default App;
