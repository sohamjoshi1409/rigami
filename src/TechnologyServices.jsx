import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TechnologyServices.module.css";

function TechnologyServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const offerings = [
    {
      title: "IT Consulting",
      description: "Strategic guidance to align technology with business goals.",
    },
    {
      title: "Custom Software Development",
      description: "Tailored applications to streamline operations and enhance user experiences.",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud-based services to support your business growth.",
    },
    {
      title: "Project and Program Management",
      description: "Robust protection against evolving digital threats.",
    },
    {
      title: "Managed IT Services",
      description: "Proactive monitoring and maintenance of your IT systems.",
    },
  ];

  // Automatic carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offerings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [offerings.length]);

  const handleContactUsClick = () => {
    navigate("/contact");
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.slideInFromLeft}>Technology Services</h1>
          <p className={styles.fadeIn}>Empowering Innovation and Growth</p>
        </div>
      </section>

      {/* Grid Section */}
      <section className={styles.offerings}>
        <h2>Our Key Offerings</h2>
        <div className={styles.carousel}>
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                index === currentIndex ? styles.active : ""
              }`}
            >
              <h3 className={styles.scaleUp}>{offering.title}</h3>
              <p>{offering.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>Transform Your Business</h2>
        <p>
          Partner with us to leverage cutting-edge technology and achieve
          unparalleled growth.
        </p>
        <button
          className={`${styles.ctaButton} ${styles.bounce}`}
          onClick={handleContactUsClick}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default TechnologyServices;
