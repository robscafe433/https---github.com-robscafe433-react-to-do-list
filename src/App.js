import React from "react";
import ContactCard from "./Components/ContactCard";
import Header from "./Components/Header";
import MainComponent from "./Components/MainContent";

import "./style.css";

const App = () => {
    return (
        <div>
            <Header />
            <MainComponent />
            <ContactCard
                name="Mr. Whiskers"
                imgUrl="http://placekitten.com/300/200"
                phone="999-999-9999"
                email="Mr.whiskers@catnap.meow"
            />
            <ContactCard
                name="Mr. Felix"
                imgUrl="http://placekitten.com/300/300"
                phone="999-999-9999"
                email="Mr.whiskers@catnap.meow"
            />
            <ContactCard
                name="Mr. Garfield"
                imgUrl="http://placekitten.com/300/400"
                phone="999-999-9999"
                email="Mr.whiskers@catnap.meow"
            />
            <ContactCard
                name="Mr. Destroyer"
                imgUrl="http://placekitten.com/300/600"
                phone="999-999-9999"
                email="Mr.whiskers@catnap.meow"
            />
        </div>
    );
};

export default App;
