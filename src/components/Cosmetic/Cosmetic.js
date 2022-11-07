import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) =>{
        console.log('Item added',id)
    }
    // If you need to send more than one data then use this
    const wraperFuncWithParam = () => addToCart(id)
    

     return (
        <div>
            <h2>Buy this: {name}</h2>
            <p>Only: {price} BDT</p>
            <button onClick={wraperFuncWithParam}>Add</button>
            <button onClick={() => addToCart(id)}>Add Shortcut</button>
        </div>
    );
};

export default Cosmetic;