import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Login from './pages/Login';
import Signup from './pages/Signup';

import About from './pages/About';
import Home from './pages/Home';
import CaseSubmission from './pages/CaseSubmission';


// Wrap AppContent inside Router
const AppContent = () => {
  const location = useLocation();  // ✅ Now inside Router

  // Hide Header for these routes
  const hideHeaderRoutes = ["/", "/login", "/signup"];
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <div className="page-content">
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/case-submission" element={<CaseSubmission />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
      </div>
    </>
  );
};

// Wrap everything inside Router
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
