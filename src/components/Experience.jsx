import React from "react";
import "../styles/experience.css";

function Experience() {
  const experiences = [
    {
      role: "Cyber Security Analyst (Intern)",
      company: "Sri Lanka CERT",
      period: "2026 - Present",
    },
    {
      role: "Visiting Demonstrator",
      company: "Test Company",
      period: "2026",
    },
  ];

  return (
    <section className="experience-section">
      <h1 className="experience-title">Experience</h1>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h2>{exp.role}</h2>
              <h3>{exp.company}</h3>
              <p>{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;