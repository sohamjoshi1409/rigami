import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ConsultingServices.module.css";

function ConsultingServices() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.slideInFromLeft}>Management Consulting Services</h1>
          <p className={styles.fadeIn}>Driving Strategic Success</p>
        </div>
      </section>

      {/* Content Section */}
      <section className={styles.content}>
        <p className={styles.fadeInContent}>
          Our Management Consulting Services empower organizations to overcome challenges, optimize operations, and achieve sustainable growth.
          We collaborate with you to identify opportunities, streamline processes, and implement effective strategies that align with your business objectives.
        </p>

        <div className={styles.keyFocus}>
          <h2 className={styles.scaleUp}>Key Focus Areas:</h2>
          <ul className={styles.list}>
            <li className={styles.slideInList}>Business Strategy: Craft actionable plans to drive long-term success.</li>
            <li className={styles.slideInList}>Operational Excellence: Enhance efficiency through process improvement and resource optimization.</li>
            <li className={styles.slideInList}>Organizational Development: Build high-performing teams and robust leadership structures.</li>
            <li className={styles.slideInList}>Change Management: Ensure smooth transitions with tailored change strategies.</li>
            <li className={styles.slideInList}>Market Analysis: Leverage insights to stay ahead in competitive landscapes.</li>
          </ul>
        </div>

        <p className={styles.fadeInContent}>
          With deep industry expertise and a client-centric approach, we deliver tailored solutions that unlock your organization’s potential.
        </p>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>Transform Your Business</h2>
        <p>Contact us to discover how our management consulting services can transform your business.</p>
        <a href="/contact">
          <button className={styles.ctaButton}>
            Contact Us
          </button>
        </a>
      </section>
    </div>
  );
}

export default ConsultingServices;
