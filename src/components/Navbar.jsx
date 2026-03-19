import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Brand */}
        <div className="brand" onClick={() => scrollToSection("home")}>

        </div>

        {/* Hamburger React makes the div clickable by onClick={() => setOpen(!open)}*/}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}                    
        >
          ☰
        </div>

        {/* Menu */}
        <ul className={`nav-menu ${open ? "show" : ""}`}>
          <li onClick={() => scrollToSection("profile")}>Profile</li>
          <li onClick={() => scrollToSection("experience")}>Experience & Hands-On</li>
          <li onClick={() => scrollToSection("stack")}>Tech Stack</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

      </div>
    </nav>
  );
}