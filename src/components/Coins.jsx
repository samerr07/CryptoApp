import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./coins.scss"
import Spinner from './Spinner';

const Coins = () => {

    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
          .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100')
          .then((response) => {
            setLoading(true)
            setCoins(response.data);
            setLoading(false)
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
  return (
    <div className="coins">
        <div className="coinsList">

        {loading && <Spinner className="spin"/>}
            {coins.map((e)=>(
                <div className="coinsItem" key={e.id}>
                    <Link to={`/coins/${e.id}`} className='cards' >
                     {/* {`${e.image}`} */}
                        <img src={e.image} alt="" width={"120px"} height={"270px"} /> 
                        <h2>{e.symbol}</h2>
                        <p>{e.name}</p>
                        <p>₹{e.current_price}</p>
                    </Link>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Coins

// ${server}/coins/markets?vs_currency=${currency}&page=${page}
