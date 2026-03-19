import React from "react";
import styles from "./About.module.css";

export const About = () => {
  const aboutData = [
    {
      title: "Full Stack Development",
      desc: "Build scalable web applications using the MERN stack with REST APIs, JWT authentication, and optimized database design. Developed projects like BookNest, Student Management System, and real-time chat apps."
    },
    {
      title: "Real-World Project Experience",
      desc: "Hands-on experience through internships, working on production-level applications with deployments on Vercel and Render, improving performance, security, and user experience."
    },
    {
      title: "AI & Problem Solving",
      desc: "Worked on AI-based solutions using Python, IBM Watson, and cloud technologies. Strong foundation in data structures, algorithms, and solving real-world problems efficiently."
    }
  ];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      {/* INTRO */}
      <p className={styles.intro}>
        I'm a Full-Stack Developer passionate about building real-world, scalable web applications.
        With hands-on experience in MERN stack, AI technologies, and cloud deployment, I focus on
        creating efficient, user-centric solutions that solve practical problems.
      </p>

      {/* CARDS */}
      <div className={styles.grid}>
        {aboutData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};