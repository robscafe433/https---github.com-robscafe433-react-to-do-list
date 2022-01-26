import React from "react";

const Products = (props) => {
    return (
        <div>
            <h2>item: {props.generalInfo.name}</h2>
            <h2>price: {props.generalInfo.price}</h2>
            <h2>description: {props.generalInfo.description}</h2>
        </div>
    );
};
export default Products;
