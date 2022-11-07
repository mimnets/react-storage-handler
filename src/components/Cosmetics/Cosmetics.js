import React from 'react';
import { add, multiply } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    const cosmetics = [
        {id: 1, name: 'Alta', price: 100},
        {id: 2, name: 'Palish', price: 200},
        {id: 3, name: 'Eyebrow', price: 300},
        {id: 4, name: 'Eyeliner', price: 400},
        {id: 5, name: 'Belt', price: 500}
    ]
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id} 
                    cosmetic={cosmetic} 
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;