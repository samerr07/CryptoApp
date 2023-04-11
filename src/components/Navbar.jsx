
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FiSearch} from "react-icons/fi";
import  "./nav.scss"
import crypto from "../assests/Crypto.png";

const Navbar = () => {

  
  

  return (
    <div className="navbar">
        <h1>Crypto</h1><span>World</span>
        <img src={crypto} alt=""  width="80px" height={"80px"} />
        <div className="search">
            <input type="text" placeholder='Search your favourite coins ...' />
            
            <FiSearch className='ser' color='orange' size={"45px"}/>
            
          


        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/coins">Coins</Link>
            <Link to="/services">Services</Link>


        </div>
    </div>
  )
}

export default Navbar
