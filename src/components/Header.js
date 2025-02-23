import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";  // ✅ Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1>⚖️ Digital Judiciary</h1>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/case-submission"> Submit Case</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
