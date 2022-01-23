import React from "react";

const Products = (props) => {
    return (
        <div>
            <h2>{props.product.name}</h2>

            <p>
                {props.product.description} -- {props.product.price}
            </p>
        </div>
    );
};

export default Products;
