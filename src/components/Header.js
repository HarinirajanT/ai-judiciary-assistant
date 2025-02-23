import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFileAlt, FaSearch, FaRobot, FaCalendarAlt, FaBell, FaHistory } from "react-icons/fa";
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
          <Link to="/casetracking">Case Tracking</Link>
          <Link to="/legalassistant"> Legal Assistant</Link>
          <Link to="/scheduler">Court Scheduler</Link>
          <Link to="/notifications"> Notifications</Link>
          <Link to="/casehistory"> Case History</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
