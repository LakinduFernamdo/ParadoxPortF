import { useEffect, useState } from "react";
import "../styles/profile.css";
import profileImg from "../assets/profile.jpg";

const titles = [
  "Cloud Computing",
  "Networking",
  "Cloud Security",
  "Network Programming",
  "Cloud-based Pentesting",
];

function Profile() {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  /* =========================
     TERMINAL TYPE EFFECT
  ========================= */

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    const typing = setTimeout(() => {
      if (charIndex < currentTitle.length) {
        setText((prev) => prev + currentTitle.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else {
        // pause before deleting
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 1500);
      }
    }, 70);

    return () => clearTimeout(typing);
  }, [charIndex, titleIndex]);

  return (
    <section className="profile-wrapper">
      {/* LEFT IMAGE */}
      <div className="profile-left">
        <img src={profileImg} alt="Lakindu" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="profile-right">
        <h1 className="title">Hi, I'm Lakindu</h1>

        <h3 className="subtitle">Cyber Security Analyst</h3>

        <p className="description">
          Undergraduate student at University of Sri Jayewardenepura
          studying Computer Science, Statistics and Mathematics.
          Currently an intern at Sri Lanka Cyber Security Emergency
          Readiness Team (SLCERT).
        </p>

        {/* TERMINAL */}
        <div className="terminal">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="terminal-body">
            <span className="prompt">lakindu@portfolio:~$ </span>
            <span className="typed">{text}</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;