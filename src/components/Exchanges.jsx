import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./exchanges.scss"
import Spinner from './Spinner';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // useEffect(()=>{
  // const fetchExchanges = async()=>{

  //   try {
  //     const {data} = await axios.get(`${server}/exchanges?per_page=250`);
  //       setExchanges(data);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/exchanges?per_page=250')
      .then((response) => {
        setLoading(true)
        setExchanges(response.data);
        setLoading(false)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
    <div className="exchange">
      
      <div className="exchangeList">
      {loading && <Spinner className="spin"/>}
      {exchanges.map((e)=>(
        
        <div className="exchangeItem">
          <a href={e.url} target={"blank"} className='card'>
            <img src={e.image} alt="" />
            <h2>{e.trust_score_rank}</h2>
            <p>{e.name}</p>
          </a>
        </div>
        
      ))}
      </div>

    </div>
    
    

    
  )

  
}

export default Exchanges


// https://api.coingecko.com/api/v3