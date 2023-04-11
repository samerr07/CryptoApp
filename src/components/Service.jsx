import React from 'react'
import "./service.scss"

const Service = () => {
  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <p className="subheading">We offer a range of crypto-related services to meet your needs.</p>
      <div className="service-grid">
        <div className="service-card">
          <h2>Buy and Sell Crypto</h2>
          <p>Buy and sell a variety of cryptocurrencies with ease, using our intuitive platform.</p>
        </div>
        <div className="service-card">
          <h2>Wallet Management</h2>
          <p>Keep track of your crypto assets and manage your wallets securely with our platform.</p>
        </div>
        <div className="service-card">
          <h2>Portfolio Tracking</h2>
          <p>Track your portfolio performance in real-time, with detailed charts and analytics.</p>
        </div>
        <div className="service-card">
          <h2>Education and Resources</h2>
          <p>Access a range of educational resources and expert insights to help you make informed decisions.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
