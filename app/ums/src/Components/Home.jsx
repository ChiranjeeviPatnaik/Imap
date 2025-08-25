import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <h2>logo</h2>
        <nav className='navBar'>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
          <button className="loginButton" onClick={() => window.location.href = "/login"}>Login</button>
        </nav>
      </header>
    </div>
  )
}

export default Home
