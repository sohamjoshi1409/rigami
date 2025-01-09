import React from "react";
import "./Careers.css";

const Careers = () => {
  return (
    <div className="careers-page">
      <div className="careers-overlay">
        <header className="careers-header">
          <h1 className="careers-title">Join Our Team</h1>
        </header>
        <div className="careers-content">
          <p className="careers-description">
            Join our team and shape the future with us! At <strong>RiGaMi</strong>, we
            believe in fostering a culture of innovation, collaboration, and growth. Explore exciting
            opportunities across various roles and departments where your talents can thrive.
          </p>
          <p className="careers-description">
            Whether you’re just starting out or looking to take the next big step in your career, we
            offer a dynamic environment that supports professional development and personal
            achievement. Let’s build something great together!
          </p>
        </div>
        <div className="careers-action">
            <br/> <br/> <br/>
          <h2>Ready to Make an Impact?</h2>
          <p>
            Explore our openings and take the first step toward an exciting career journey.
            <br />
            Check out current openings on our <b>LinkedIn</b> page!
          </p>
          <a
            href="https://www.linkedin.com/in/rigami-consultancy-050338337/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img
              src="/linkedin-logo.png"
              alt="LinkedIn"
              className="linkedin-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
