import React from 'react';
import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 55;
  const second = 45;
  const total = add(first, second);
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>{total}</p>
        </div>
    );
};

export default Cosmetics;