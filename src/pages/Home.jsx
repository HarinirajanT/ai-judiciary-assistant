import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun, FaUserCircle } from "react-icons/fa"; 

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false); // Assume user is not logged in initially
    const navigate = useNavigate(); // Hook for navigation

    // Handle dashboard click: Redirect to login if not logged in
    const handleDashboardClick = () => {
        if (userLoggedIn) {
            navigate("/dashboard");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className={darkMode ? "dark-mode home-container" : "home-container"}>
            {/* Navigation Bar */}
            <nav className="navbar">
                <h1 style={{ color: "white" }}>⚖️ Digital Judiciary</h1>

                {/* Desktop Navigation */}
                <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/case-submission" onClick={() => setMenuOpen(false)}>Case Submission</Link></li>
                    {/* If user is logged in, show profile dropdown */}
                    {userLoggedIn ? (
                        <li className="profile-menu">
                            <FaUserCircle size={22} />
                            <ul className="dropdown">
                                <li><Link to="/profile">Profile</Link></li>
                                <li><button onClick={() => setUserLoggedIn(false)}>Logout</button></li>
                            </ul>
                        </li>
                    ) : (
                        // Show Login & Signup if user is not logged in
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </>
                    )}

                    {/* Dark Mode Toggle */}
                    <li className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="text-4xl font-bold" style={{ color: "white" }}>
                    Welcome to AI-Powered Digital Judiciary
                </h1>
                <p className="mt-2 text-lg">
                    Revolutionizing legal processes with AI for instant resolutions.
                </p>
                <Link to="/case-submission">
                    <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100">
                        Submit a Case Now
                    </button>
                </Link>
            </section>

            {/* Call-to-Action Section */}
            <section className="cta-section">
                <h2 className="text-2xl text-white font-bold">Get Started Today</h2>
                <p className="mt-2 text-lg">Experience the future of judiciary with AI-driven legal resolutions.</p>
                <Link to="/about">
                    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700">
                        Learn More
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default Home;
