import React from "react";
import "../styles/education.css";

function Education() {
  const educations = [
    {
      title: "B.Sc Computer Science / Statistics / Mathematics",
      place: "University of Sri Jayewardenepura",
      period: "2023 — 2026",
    },
    {
      title: "Cyber Security Program",
      place: "Test Academy",
      period: "2026",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h1 className="education-title">Education and Certifications</h1>

      <div className="timeline">
        {educations.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h2>{edu.title}</h2>
              <h3>{edu.place}</h3>
              <p>{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;