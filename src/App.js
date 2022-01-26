import React from "react";
import Joke from "./Components/Joke";
import Products from "./Components/Products";
import jokesData from "./jokesData";
import schoolsProduct from "./schoolProductsData";

const App = () => {
    const schoolDataDisplay = schoolsProduct.map((item) => {
        return <Products generalInfo={item} />;
    });
    return <div>{schoolDataDisplay}</div>;
};

export default App;
