import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setShowLogin, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to the Cart page
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the Home page
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <button onClick={handleLogoClick} className="logo-btn">
            <img src="/images/logo.png" alt="Logo" />
          </button>
        </div>
        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("products")}>Products</li>
            <li onClick={() => scrollToSection("about-us")}>About Us</li>
            <li onClick={() => scrollToSection("contact-us")}>Contact Us</li>
            <li>
              <button onClick={() => setShowLogin(true)}>Sign In</button>
            </li>
            <li>
              <button className="cart-icon" onClick={handleCartClick}>
                🛒 Cart
              </button>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
