import React from 'react';

const Recap = (props) => {
    const {name,price} = props.mobile;

    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Recap;