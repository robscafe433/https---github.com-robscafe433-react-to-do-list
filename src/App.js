import React from "react";
import productsData from "./schoolProductsData";
import Product from "./Components/Products";

const App = () => {
    const productsComponent = productsData.map((item) => {
        return <Product key={item.id} product={item} />;
    });

    return <div>{productsComponent}</div>;
};

export default App;
