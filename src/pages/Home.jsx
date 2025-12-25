import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to KN Travels</h1>
          <p>Your journey begins here - Explore the world with us</p>
        </div>
      </section>

      <section className="about-us">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <p>
              KN Travels is your trusted partner in creating unforgettable travel experiences. With years of expertise in the tourism industry, we
              specialize in providing exceptional travel services tailored to your needs.
            </p>
            <p>
              Our mission is to make travel accessible, enjoyable, and memorable for everyone. Whether you're planning a family vacation, a romantic
              getaway, or an adventure expedition, we're here to help you every step of the way.
            </p>
            <div className="about-features">
              <div className="feature">
                <h3>🌍 Global Destinations</h3>
                <p>Access to hundreds of breathtaking destinations worldwide</p>
              </div>
              <div className="feature">
                <h3>🚗 Premium Vehicles</h3>
                <p>Comfortable and reliable transportation options</p>
              </div>
              <div className="feature">
                <h3>⭐ Expert Guides</h3>
                <p>Professional and knowledgeable tour guides</p>
              </div>
              <div className="feature">
                <h3>💯 Best Prices</h3>
                <p>Competitive rates with no hidden costs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
