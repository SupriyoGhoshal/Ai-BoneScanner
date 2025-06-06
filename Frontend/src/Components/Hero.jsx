import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
    <section class="hero">
    <div class="container">
      <h1>AI-Powered Bone Health Prediction</h1>
      <p>Upload your x-ray and let our AI detect deficiencies, predict risks, and guide recovery.</p>
      <a href="#scan" class="btn btn-primary">Scan Now</a>
    </div>
  </section>


  <section class="py-5">
    <div class="container">
      <div class="row text-center mb-4">
        <h2>Why Choose NutriBone?</h2>
      </div>
      <div class="row g-4">
        <div class="col-md-3">
          <div class="icon-card">
            <h5>🔍 Early Detection</h5>
            <p>Identify bone issues before they become critical.</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon-card">
            <h5>🧬 AI Accuracy</h5>
            <p>Advanced models trained on real medical data.</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon-card">
            <h5>💊 Deficiency Insights</h5>
            <p>Track calcium, vitamin D and more.</p>
          </div>
        </div>
        <div class="col-md-3">
          <div class="icon-card">
            <h5>👩‍⚕️ Personalized Reports</h5>
            <p>Tailored suggestions based on your profile.</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="steps-section">
    <div class="container">
      <div class="row text-center mb-4">
        <h2>How It Works</h2>
      </div>
      <div class="row g-4 text-center">
        <div class="col-md-4">
          <h4>📤 Upload Scan</h4>
          <p>Choose your bone X-ray or scan image to start.</p>
        </div>
        <div class="col-md-4">
          <h4>🧠 AI Analysis</h4>
          <p>We run your scan through advanced bone-health models.</p>
        </div>
        <div class="col-md-4">
          <h4>📄 Report Result</h4>
          <p>Get your report in seconds with tips to improve bone strength.</p>
        </div>
      </div>
    </div>
  </section>


  <section class="about-section">
    <div class="container">
      <h2>Inspired by a Mother's Journey</h2>
      <p>This platform was created to make early bone health predictions accessible for families—especially for mothers and elders—using the power of AI.</p>
    </div>
  </section>

 
  <section class="cta-section">
    <div class="container">
      <h2>Ready to Predict Your Bone Health?</h2>
      <a href="#scan" class="btn btn-primary mt-3">Get Started Now</a>
    </div>
  </section>
  </div>

  )
}

export default Hero
