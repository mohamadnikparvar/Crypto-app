import React, { useEffect, useState } from 'react';

// API
import { getCoin } from '../services/api';

// components
import Loader from './Loader';

const Landing = () => {

    const [coins,setCoins] = useState([])

    useEffect(() =>{
        const fetchAPI =async () =>{
            const data = await getCoin()
            setCoins(data)
        }
        fetchAPI()
    },[])

    return (
        <>
        <input type="text" placeholder="Search"></input>
        {
            coins.length?
        <div>
            {
                coins.map(coin => <p key={coin.id}>{coin.name}</p>)
            }
        </div> :
        <Loader/>   
        }
        
        </>
    );
};

export default Landing;