import React from "react";
import "../styles/footer.css";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Lakindu Fernando. All Rights Reserved.
        <p>ZmxhZ3tUSDRuayBZMHV9</p>
      </div>

    </footer>
  );
}

export default Footer;