import React from 'react';
import { add, multiply } from '../../utilities/calculate';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    const first = 55;
  const second = 45;
  const total = add(first, second);
  const gun = multiply(first, second);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>{total}</p>
            <p>{gun}</p>
        </div>
    );
};

export default Cosmetics;