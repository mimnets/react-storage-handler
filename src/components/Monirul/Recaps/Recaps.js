import React, { useEffect, useState } from 'react';
import Recap from '../Recap/Recap';

const Recaps = () => {
    const [mobiles, setMobiles] = useState([]);

    useEffect(()=>{
        fetch('mobileFakeData.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <h1>Monirul Recap</h1>
            <Recap></Recap>
        </div>
    );
};

export default Recaps;