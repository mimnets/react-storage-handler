import React, { useEffect, useState } from 'react';
import { add, getTotal, multiply } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])

    const total = getTotal(cosmetics);

    console.log(total)

    return (
        <div>
            <h1>Welcome to my cosmetics store - learn mock api</h1>
            <p>Money need : {total}</p>
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