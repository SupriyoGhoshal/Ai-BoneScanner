import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
   
    <div>
         <Navbar></Navbar>
      <section
        style={{
          background: 'linear-gradient(to right, #f9f9f9, #e6f0ff)',
          minHeight: '100vh',
          paddingTop: '60px',
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left side image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="https://cdn.megawecare.com/Internal-Images/87LijxloBlhY9GtGSgYX56snioEpq1fFMYqEwqFe.webp"
                alt="Bone Health AI"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right side content */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-3 text-primary">About NutriBone</h2>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                <strong>NutriBone</strong> is an AI-powered bone health assessment platform built to detect deficiencies,
                estimate fracture risk, and guide better bone care—especially for mothers and aging women. Using advanced
                image analysis and intelligent scanning, we aim to prevent silent bone diseases like osteoporosis before
                they strike.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#333' }}>
                This project integrates medical imaging, AI models, and MERN-based web technology to offer real-time
                insights with simple scans. NutriBone is your proactive health partner for stronger bones and a safer future.
              </p>
              <a href="#scan" className="btn btn-primary mt-3 px-4 py-2 rounded-pill">
                Start Scan
              </a>
            </div>
          </div>

          
          {/* Why We Built */}
          <div className="mt-5">
            <h2 className="fw-bold mb-3 text-primary">Why We Built NutriBone</h2>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
              This idea came from a personal place — when my mother experienced bone weakness due to late-detected
              Vitamin D deficiency. We realized millions suffer silently due to lack of early detection.
            </p>
          </div>

          {/* What NutriBone Does */}
          <div className="mt-4">
            <h2 className="fw-bold mb-3 text-primary">What NutriBone Does</h2>
            <ul style={{ fontSize: '1.1rem', color: '#333' }}>
              <li>🔍 Scan-Based Detection — Upload X-ray or scan, get instant AI report</li>
              <li>💊 Deficiency Prediction — AI tells you if you're low in Calcium or Vitamin D</li>
              <li>⚠️ Fracture Risk Estimation — Know your risk before a fracture occurs</li>
              <li>📈 Health Profile Analysis — Combines your profile with scan data for better insights</li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="mt-4">
            <h2 className="fw-bold mb-3 text-primary">How It Works</h2>
            <ul style={{ fontSize: '1.1rem', color: '#333' }}>
              <li>📤 Upload Your Bone X-ray</li>
              <li>🧠 AI Scans & Predicts</li>
              <li>📄 Get Instant Health Report</li>
            </ul>
          </div>

          {/* Our Promise */}
          <div className="mt-4">
            <h2 className="fw-bold mb-3 text-primary">Our Promise</h2>
            <ul style={{ fontSize: '1.1rem', color: '#333' }}>
              <li>🔐 Privacy First — Your scans and health data are secure</li>
              <li>🧬 Always Learning — AI improves as we grow</li>
              <li>💖 For Every Family — Designed for mothers, elders & anyone at risk</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer /> 
    </div>
  );
};

export default About;
