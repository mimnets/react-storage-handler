import React, { useEffect, useState } from 'react';
import Recap from '../Recap/Recap';

const Recaps = () => {
    const [mobiles, setMobiles] = useState([]);

    useEffect(()=>{
        fetch('mobileFakeData.json')
        .then(res => res.json())
        .then(data => setMobiles(data))
    },[])
    return (
        <div>
            <h1>Monirul Recap</h1>
            <h2>List of Mobiles</h2>
            {
                mobiles.map(mobile => <Recap mobile={mobile}></Recap>)
            }
            {/* <Recap></Recap> */}
        </div>
    );
};

export default Recaps;