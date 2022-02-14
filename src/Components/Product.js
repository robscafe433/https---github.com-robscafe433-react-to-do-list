import React from "react";

const Product = (props) => {
    return(
        <div>
            <h2>Name: {props.product.name}</h2>
            <h2>Description: {props.product.description}</h2>
            <h2>Price: ${props.product.price}</h2>
        </div>
    )
};

export default Product;
