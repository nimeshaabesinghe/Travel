import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link
          to="/"
          className="nav-logo"
          onClick={closeMenu}
        >
          KN Travels
        </Link>

        <div className={isOpen ? "nav-menu active" : "nav-menu"}>
          <Link
            to="/"
            className="nav-link"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="nav-link"
            onClick={closeMenu}
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </div>

        <div
          className="nav-icon"
          onClick={toggleMenu}
        >
          <div className={isOpen ? "hamburger active" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
