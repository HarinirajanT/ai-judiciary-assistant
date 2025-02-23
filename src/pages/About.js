import React from "react";
import "./About.css"; // Import the CSS file

const About = () => {
    return (
        <div className="about-container">
            {/* Introduction Section */}
            <div className="about-hero">
                <h1>About AI-Powered Digital Judiciary</h1>
                <p>
                    Transforming the legal landscape with <strong>Artificial Intelligence</strong> and <strong>Blockchain Technology</strong> to deliver fast and fair legal resolutions.
                </p>
            </div>

            {/* Our Vision */}
            <div className="about-section">
                <h2>🌟 Our Vision</h2>
                <p>
                    Our goal is to <strong>revolutionize</strong> the judicial system by <strong>reducing case backlogs</strong> and <strong>automating minor legal disputes</strong> through AI-driven analysis and smart contract enforcement.
                </p>
            </div>

            {/* How It Works */}
            <div className="about-section">
                <h2>⚖️ How It Works?</h2>
                <div className="about-steps">
                    <div className="step">
                        <span className="step-icon">📝</span>
                        <p>Users submit case details using our platform.</p>
                    </div>
                    <div className="step">
                        <span className="step-icon">🤖</span>
                        <p>AI analyzes legal aspects and provides a recommended course of action.</p>
                    </div>
                    <div className="step">
                        <span className="step-icon">🔗</span>
                        <p>Blockchain smart contracts ensure tamper-proof legal agreements.</p>
                    </div>
                    <div className="step">
                        <span className="step-icon">⚡</span>
                        <p>Dispute resolution for minor cases is automated, saving time and costs.</p>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default About;
