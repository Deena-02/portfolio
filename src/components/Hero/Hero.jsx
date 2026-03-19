import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        
        {/* NAME */}
        <h1 className={styles.title}>
          Hi, I'm <span>Deena</span>
        </h1>

        {/* ROLE */}
        <h2 className={styles.subtitle}>
          Full Stack Developer | MERN | AI Enthusiast
        </h2>

        {/* DESCRIPTION */}
        <p className={styles.description}>
          I build scalable, real-world web applications using the MERN stack,
          with hands-on experience in REST APIs, JWT authentication, and real-time systems.
          Passionate about solving problems and creating impactful digital solutions.
        </p>

        {/* BUTTONS */}
        <div className={styles.actions}>
          <a href="mailto:deena1202m@gmail.com" className={styles.primaryBtn}>
            Contact Me
          </a>

          <a
            href="https://github.com/Deena-02"
            target="_blank"
            rel="noreferrer"
            className={styles.secondaryBtn}
          >
            View GitHub
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <img
        src={heroImage}
        alt="Hero"
        className={styles.heroImg}
      />
      {/* RIGHT IMAGE */}
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};