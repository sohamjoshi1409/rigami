import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./AboutUs.css"; // Make sure to create a separate CSS file for styling

function AboutUs() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">About RiGaMi Consultancy</h1>
          <p className="hero-description">
          We are a team of passionate technology experts committed to solving complex challenges and driving digital transformation. With a focus on innovation, agility, and client success, we aim to bridge the gap between business needs and technology solutions.
          </p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="about-us-content">
        <div className="content-left">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-text">
            We specialize in staffing, IT solutions, and customizations,
            helping businesses meet their goals with top talent and customized
            strategies.
          </p>
        </div>
      </section>

      {/* Our Specialization */}
      <section className="about-us-section">
        <div className="section-header">
          <i className="icon fas fa-cogs"></i>
          <h2 className="section-title">Our Specialization</h2>
        </div>
        <p className="section-text">
          Our recruitment services ensure top talent aligns with a company's
          culture and objectives, handling every step of the recruitment
          process.
        </p>
      </section>

      {/* Our Strategy */}
      <section className="about-us-section">
        <div className="section-header">
          <i className="icon fas fa-lightbulb"></i>
          <h2 className="section-title">Our Strategy</h2>
        </div>
        <p className="section-text">
          We create unique strategies to cater to our client's strengths,
          ensuring businesses remain competitive and growth-oriented.
        </p>
      </section>

      {/* Driving Growth */}
      <section className="about-us-section">
        <div className="section-header">
          <i className="icon fas fa-chart-line"></i>
          <h2 className="section-title">Driving Growth</h2>
        </div>
        <p className="section-text">
          We leverage social connections and meaningful engagement to drive
          sales growth and multiply business success.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">Let’s Connect and Grow Together</h2>
        <p className="cta-text">
          Simplify to Multiply. Simplify your processes to multiply your
          business growth. With RiGaMi
        </p>
        {/* Link to the Contact Us page */}
        <a href="/contact" onClick={handleScrollToTop}>
          <button className="cta-button">Contact Us</button>
        </a>
      </section>
    </div>
  );
}

export default AboutUs;
