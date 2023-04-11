import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./home.scss"

const Home = () => {
    const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&sparkline=false')
      .then((response) => {
        setCryptoData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div className="home">
        <h1 >The World's Leading<br/> 
        Cryptocurrency Platform</h1>

    <ul>
        <li>Trusted by more than 80M users world-wide</li>
        <li>Leader in regulatory compliance and security certifications</li>
        <li>The industry's most comprehensive insurance coverage and verified proof of reserves</li>
    </ul>
    
    <div className="table">
    <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id}>
              <td>{crypto.name}</td>
              <td>{crypto.current_price}</td>
              <td>{crypto.market_cap}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    </div>
    </>
  )
}

export default Home
