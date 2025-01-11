import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./RecruitmentOutsourcing.css";

function RecruitmentOutsourcing() {

  return (
    <div className="recruitment-page">
      {/* Hero Section */}
      <section className="recruitment-hero">
        <div className="hero-overlay">
          <h1 className="hero-title animate-zoom">Recruitment Outsourcing</h1>
          <p className="hero-subtitle">
            Streamline your hiring process and focus on growing your business.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="intro-wrapper">
          <div className="intro-text animate-fade-in">
            <h2 className="intro-title">What We Do</h2>
            <p>
              At RiGaMi, we provide strategic recruitment solutions to empower businesses by
              delegating hiring functions to external partners. Our approach optimizes the
              recruitment process, allowing organizations to focus on their core operations while
              leveraging specialized expertise to attract, screen, and onboard top talent.
            </p>
          </div>
          {/* Update the image source to intro-img.webp */}
          <div className="intro-image animate-slide-up">
            <img src="/intro-img.webp" alt="Recruitment process" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="benefits-title animate-slide-up">Key Benefits</h2>
        <div className="benefits-grid animate-fade-in">
          <div className="benefit-card">
            <h3>Cost-Effective</h3>
            <p>Reduce overhead costs by streamlining your recruitment processes.</p>
          </div>
          <div className="benefit-card">
            <h3>Scalable Solutions</h3>
            <p>Adapt hiring strategies to meet fluctuating business needs.</p>
          </div>
          <div className="benefit-card">
            <h3>Access to Expertise</h3>
            <p>Leverage the experience and tools of industry professionals.</p>
          </div>
          <div className="benefit-card">
            <h3>Time-Saving</h3>
            <p>Accelerate the hiring cycle with a dedicated team.</p>
          </div>
          {/* Added new benefits */}
          <div className="benefit-card">
            <h3>Focused Approach</h3>
            <p>Specialized recruitment to meet unique business needs.</p>
          </div>
          <div className="benefit-card">
            <h3>Flexible Engagement</h3>
            <p>Tailored solutions to fit the demands of any industry.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-wrapper">
          <div className="cta-text animate-fade-in">
            <h2>Find the Right Talent Today</h2>
            <p>
              Whether you're a startup or an enterprise, recruitment outsourcing ensures you have
              the right people to drive growth. Let us help you simplify your hiring process.
            </p>
          </div>
          <div className="cta-button-wrapper animate-zoom">
            {/* Updated to use regular button for navigation */}
            <a href="/contact">
              <button className="cta-button">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecruitmentOutsourcing;
