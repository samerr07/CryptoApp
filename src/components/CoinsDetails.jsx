import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./coinDetails.scss"

const CoinsDetails = () => {

    const [coin, setCoin] = useState({})
  

    const params = useParams()

    useEffect(() => {
        axios
          .get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
          .then((response) => {
            setCoin(response.data);
            // setLoading(false);
            console.log(response.data)
          })
          .catch((error) => {
            console.log(error);
            
          });
      }, [params.id]);

     

        
  return (
    <div className='coinDetails'>
        {/* upr useState m coin r setCoin h vha pr api ke through jis coinDetails
        pr click kiya uska data setcoin kr denge r coin se sb kuch nikalenge */}
         
         <h4>Coin Details</h4>

       <h3>Last Updated : {coin.last_updated}</h3>
       <h3>Coin Name : {coin.name}</h3>
       <h3>Symbol : {coin.symbol}</h3>
        <h3>Coin Name : {coin.name}</h3>
        <h3> Market Cap Rank: {coin.market_cap_rank} </h3>
        <h3>Coingecko Score: {coin.coingecko_score}</h3>
        {/* <img src={coin.image.thumb} alt="" width={"70px"} height={"70px"} /> */}
      
      
        <h3>Liquidity Score :{coin.liquidity_score} </h3>
        <h3>Sentiment votes Down :{coin.sentiment_votes_down_percentage} %</h3>
        <h3>Sentiment votes Up :{coin.sentiment_votes_up_percentage} %</h3>
        
        
    </div>
  )
}

export default CoinsDetails
