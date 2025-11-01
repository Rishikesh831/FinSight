import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">FinSight</div>

      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <div className="navbar-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Try Free</button>
      </div>
    </nav>
  );
}
