import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "How can I reach your customer support team?",
      answer: "You can reach us via email at [Insert Email Address] or call us at [Insert Phone Number].",
    },
    {
      question: "What are your office hours?",
      answer: "Our office is open Monday to Friday, 9:00 AM to 6:00 PM.",
    },
    {
      question: "Where is your office located?",
      answer: "We are located at [Insert Address]. Feel free to visit us during office hours.",
    },
    {
      question: "Do you offer remote consultations?",
      answer: "Yes, we offer virtual consultations to clients worldwide. Contact us to schedule one.",
    },
  ];

  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Let’s Connect and Collaborate</p>
      </section>

      {/* Description */}
      <section className="contact-description-section">
        <p className="contact-description">
          Have questions or need assistance? We're here to help! Whether you're
          looking to explore our services, discuss your business needs, or
          simply want to learn more about what we do, we’d love to hear from
          you.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="contact-item bounce-in">
          <i className="fas fa-phone contact-icon"></i>
          <h3 className="contact-item-title">Call Us</h3>
          <p className="contact-detail">+91 8484807908</p>
        </div>

        <div className="contact-item bounce-in">
          <i className="fas fa-envelope contact-icon"></i>
          <h3 className="contact-item-title">Email Us</h3>
          <p className="contact-detail">support@rigami.in</p>
        </div>

        <div className="contact-item bounce-in">
          <i className="fas fa-map-marker-alt contact-icon"></i>
          <h3 className="contact-item-title">Visit Us</h3>
          <p className="contact-detail">
            <a href="https://www.linkedin.com/in/rigami-consultancy-050338337/"> <u>LinkedIn</u> </a>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-items">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeQuestion === index ? "active" : ""}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <i
                  className={`fas ${
                    activeQuestion === index ? "fa-minus" : "fa-plus"
                  }`}
                ></i>
              </div>
              {activeQuestion === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
