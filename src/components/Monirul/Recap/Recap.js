import React from 'react';

const Recap = (props) => {
    const {id, name,price} = props.mobile;
    
    const passAddToCart = () =>{
        addToCart(id)
    }

    const addToCart = (id) =>{
        console.log("clciked", id);
    }

    return (
        <div>
            <p>{name}</p>
            <p>${price}</p>
            <button onClick={passAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Recap;