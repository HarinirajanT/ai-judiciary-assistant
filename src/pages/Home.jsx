import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  MessageSquare,
  Calendar,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import "../styles/home.css";

const FEATURES = [
  {
    icon: FileText,
    color: "#3b82f6",
    title: "Case Management",
    text: "Submit, track, and manage legal cases efficiently with our comprehensive digital platform",
  },
  {
    icon: MessageSquare,
    color: "#10b981",
    title: "LawGPT Assistant",
    text: "Get instant legal information powered by AI trained on Indian law documents including IPC and more",
  },
  {
    icon: Calendar,
    color: "#f59e0b",
    title: "Court Scheduling",
    text: "Automated hearing scheduling and calendar management for judges and lawyers",
  },
  {
    icon: Shield,
    color: "#8b5cf6",
    title: "Secure & Compliant",
    text: "Role-based access control ensures data security and regulatory compliance",
  },
  {
    icon: TrendingUp,
    color: "#ef4444",
    title: "Real-time Updates",
    text: "Get instant notifications about case status, hearings, and important updates",
  },
  {
    icon: Users,
    color: "#06b6d4",
    title: "Collaborative Platform",
    text: "Seamless collaboration between lawyers, judges, and legal professionals",
  },
];

const STEPS = [
  {
    number: 1,
    title: "Register",
    text: "Create your account as a lawyer, judge, court staff, or admin",
  },
  {
    number: 2,
    title: "Submit a Case",
    text: "File cases with documents — AI analyzes and classifies them instantly",
  },
  {
    number: 3,
    title: "Track & Manage",
    text: "Monitor case status, schedule hearings, and collaborate in real time",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <span className="home-hero-badge">⚖️ AI-Powered Legal Platform</span>
        <h1 className="home-hero-title">Digital Judiciary System</h1>
        <p className="home-hero-subtitle">
          Streamline legal processes with intelligent case management, AI-powered
          legal assistance, and real-time case tracking for Tamil Nadu courts
        </p>
        <div className="home-hero-actions">
          <Link to="/register" className="home-btn-primary">
            Get Started Free
          </Link>
          <Link to="/login" className="home-btn-secondary">
            Sign In
          </Link>
        </div>
      </section>

      <section className="home-steps">
        <h2 className="home-section-title">How It Works</h2>
        <div className="home-steps-grid">
          {STEPS.map((step) => (
            <div key={step.number} className="home-step">
              <span className="home-step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="home-section-title">Platform Features</h2>
        <div className="home-features">
          {FEATURES.map(({ icon: Icon, color, title, text }) => (
            <div key={title} className="home-feature-card">
              <Icon size={40} color={color} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <h2>Ready to Transform Legal Management?</h2>
        <p>Join legal professionals using our AI-powered judiciary platform</p>
        <Link to="/register" className="home-cta-btn">
          Get Started Today
        </Link>
      </section>
    </div>
  );
}
