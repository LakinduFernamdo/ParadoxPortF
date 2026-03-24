// src/components/Contact.jsx

import React from "react";
import "../styles/contact.css";

import { AiFillGithub, AiFillLinkedin, AiFillSound } from "react-icons/ai";
import confetti from "canvas-confetti";

function Contact() {

  const handleCelebrate = (e) => {
    e.preventDefault(); // prevent page reload

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="contact-section">

      <h1 className="contact-title">Contact</h1>

      <div className="contact-container">

        {/* ===== LEFT : FORM ===== */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message..."
            required
          />

          <button
            className="send-btn"
            onClick={handleCelebrate}
          >
            <AiFillSound className="btn-icon" />
            Send Message
          </button>

        </form>

        {/* ===== RIGHT : SOCIAL ===== */}
        <div className="contact-social">

          <h3>Connect With Me</h3>

          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <AiFillLinkedin />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;