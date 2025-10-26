import React from 'react';
import './Home.css';
import TripTasticLogo from '../../assets/TripTasticLogo.png';
import { CiLogin } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";

const Home = () => {
    return (
        <div className="homeContainer">
            <header>
                <img src={TripTasticLogo} alt="TripTastic Logo" className="TripTasticLogoHome" />
                <nav className='navBar'>
                    <button className='AboutButtonHome' onClick={() => window.location.href = '/about'}>
                        <FcAbout /> About
                    </button>
                    <button className='SupportButtonHome' onClick={() => window.location.href = "/support"}>
                        <BiSupport /> Support
                    </button>
                    <button className="loginButtonHome" onClick={() => window.location.href = "/login"}>
                        <CiLogin /> Login
                    </button>
                </nav>
            </header>

            <main className='homeBody'>
                <h1 className='homeTitle'>Welcome to TripTastic!</h1>
                <p className='homeSubtitle'>Book flights with ease and explore the world</p>

                <div className="bookingCard">
                    <h2>Book Your Flight</h2>
                    <form className="bookingForm">
                        <input type="text" placeholder="From (City / Airport)" required />
                        <input type="text" placeholder="To (City / Airport)" required />
                        <input type="date" required />
                        <select>
                            <option>1 Passenger</option>
                            <option>2 Passengers</option>
                            <option>3 Passengers</option>
                            <option>4+ Passengers</option>
                        </select>
                        <button type="submit" className="searchFlightBtn">Search Flights</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Home;
