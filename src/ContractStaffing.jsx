import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContractStaffing.module.css"; // Importing CSS module

function ContractStaffing() {
  const navigate = useNavigate();

  // Function to handle the "Contact Us" button click
  const handleContactUsClick = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  return (
    <div className={styles.contractStaffingPage}>
      {/* Hero Section */}
      <section className={styles.contractStaffingHero}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroTitle}>Contract Staffing</h1>
          <p className={styles.heroSubtitle}>
            Flexibility and agility in building your workforce with specialized talent.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.contractIntroSection}>
        <div className={styles.contractIntroWrapper}>
          <div className={styles.contractIntroText}>
            <h2 className={styles.contractIntroTitle}>What We Offer</h2>
            <p>
              Contract staffing provides businesses with the ability to scale their workforce quickly
              without the long-term commitment of permanent hires. We help you meet short-term, project-based, or seasonal
              staffing needs efficiently.
            </p>
          </div>
          <div className={styles.contractIntroImage}>
            <img src="contract-staffing-image.webp" alt="Contract staffing" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.contractBenefitsSection}>
        <h2 className={styles.contractBenefitsTitle}>Why Choose Us?</h2>
        <div className={styles.contractBenefitsGrid}>
          <div className={styles.contractBenefitCard}>
            <div className={styles.benefitIcon}>⚡</div>
            <h3>Flexibility</h3>
            <p>Scale your workforce to meet changing project needs.</p>
          </div>
          <div className={styles.contractBenefitCard}>
            <div className={styles.benefitIcon}>💰</div>
            <h3>Cost Efficiency</h3>
            <p>Save on overhead costs by hiring as needed.</p>
          </div>
          <div className={styles.contractBenefitCard}>
            <div className={styles.benefitIcon}>🔍</div>
            <h3>Specialized Talent</h3>
            <p>Access professionals with niche skills for your projects.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.contractCtaSection}>
        <div className={styles.contractCtaText}>
          <h2>Get in Touch Today</h2>
          <p>Let us help you streamline your hiring process and connect you with the right talent for your needs.</p>
        </div>
        <div className={styles.contractCtaButtonWrapper}>
          <button className={styles.contractCtaButton} onClick={handleContactUsClick}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default ContractStaffing;
