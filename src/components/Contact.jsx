// src/components/Contact.jsx
import React, { useState } from "react";
import "../styles/contact.css";

import axios from "axios";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import confetti from "canvas-confetti";

function Contact() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendMyEmail = async (e) => {
    e.preventDefault();

    try {
      // Call backend API vercel
      await axios.post("/api/mail", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Confetti celebration
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });

      alert("Message sent successfully ✅");

      // Clear form
      setForm({
        fullname: "",
        email: "",
        message: ""
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message ❌");
    }
  };

  return (
    <section className="contact-section">

      <h1 className="contact-title">Contact</h1>

      <div className="contact-container">

        {/* ===== LEFT : FORM ===== */}
        <form className="contact-form" onSubmit={sendMyEmail}>

          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={form.fullname}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button className="send-btn" type="submit">

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