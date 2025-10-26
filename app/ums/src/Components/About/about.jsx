// src/Components/About/about.jsx
import React from "react";
import Navbar from "../Navbar/Navbar";
import "./about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="tt-about-page">
        <section className="tt-about-card">
          <h1>✈️ About TripTastic</h1>
          <p className="lead">
            Welcome to <strong>TripTastic</strong> — your one-stop destination for smarter,
            faster, and more affordable flight bookings.
          </p>

          <p>
            At <strong>TripTastic</strong>, we believe planning your next trip should be exciting,
            not exhausting. Our demo platform helps you discover great deals, compare prices,
            and book tickets effortlessly.
          </p>

          <h3>🌍 Our Mission</h3>
          <p>
            To make travel accessible and stress-free for everyone by offering transparent prices,
            instant booking, and personalized travel experiences.
          </p>

          <h3>💡 What Makes TripTastic Different?</h3>
          <ul>
            <li>🧭 Smart Search — tailored to your budget and schedule.</li>
            <li>💸 Transparent Pricing — no hidden fees.</li>
            <li>⚡ Instant Booking — quick and secure confirmations.</li>
            <li>💬 24/7 Support — friendly help when you need it.</li>
          </ul>

          <h3>🌟 Our Vision</h3>
          <p>
            To empower travelers with simple technology that inspires new adventures — because every
            journey should be <strong>TripTastic!</strong>
          </p>

          <div className="cta">
            <a className="primary-btn" href="/home">Start Searching Flights</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
