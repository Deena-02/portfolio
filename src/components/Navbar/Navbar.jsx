import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      
      {/* LOGO */}
      <a href="/" className={styles.logo}>
        M Deena
      </a>

      {/* MENU */}
      <div className={styles.menu}>
        
        {/* MOBILE BUTTON */}
        <div
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* LINKS */}
        <ul className={`${styles.menuItems} ${menuOpen ? styles.open : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>

          {/* CTA BUTTON */}
          <li>
            <a
              href="mailto:deena1202m@gmail.com"
              className={styles.cta}
            >
              Hire Me
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};