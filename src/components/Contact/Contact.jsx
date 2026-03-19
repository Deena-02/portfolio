import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      
      {/* HEADER */}
      <div className={styles.header}>
        <h2>Get In Touch</h2>
        <p>
          I'm open to internships, freelance, and full-time opportunities.
          Feel free to connect with me 🚀
        </p>
      </div>

      {/* CONTACT CARDS */}
      <div className={styles.grid}>
        
        <a href="mailto:deena1202m@gmail.com" className={styles.card}>
          <FaEnvelope className={styles.icon} />
          <h3>Email</h3>
          <span>deena1202m@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/m-deena-1048032b6"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <FaLinkedin className={styles.icon} />
          <h3>LinkedIn</h3>
          <span>Connect with me</span>
        </a>

        <a
          href="https://github.com/Deena-02"
          target="_blank"
          rel="noreferrer"
          className={styles.card}
        >
          <FaGithub className={styles.icon} />
          <h3>GitHub</h3>
          <span>View my projects</span>
        </a>

      </div>

      {/* FOOTER TEXT */}
      <p className={styles.footer}>
        © {new Date().getFullYear()} Deena.  All rights reserved.
      </p>

    </section>
  );
};