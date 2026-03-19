import React from "react";
import styles from "./Certificates.module.css";

export const Certificates = () => {
  const certificates = [
    {
      title: "Google Developer Groups (GDG) Badge",
      org: "Google",
      year: "2024",
      desc: "Recognition for active participation in Google developer community.",
      link: "https://cdn.qwiklabs.com/Ru6tujyVFgXVIp0w2vaCxtS11aOc1zEM4JQTP8C0iMU%3D"
    },
    {
      title: "Java Programming Certificate",
      org: "edX",
      year: "2023",
      desc: "Comprehensive Java programming course covering OOP concepts and advanced topics.",
      link: "https://courses.edx.org/certificates/e6698b5e49184131b1c0df5bf01942bb"
    },
    {
      title: "Full Stack Development (MERN)",
      org: "SmartBridge",
      year: "2023",
      desc: "Extensive training in MERN stack (MongoDB, Express, React, Node.js).",
      link: "https://apsche.smartinternz.com/certificate/student/8a5fae34202f1c81f9f513c81b34b386"
    }
  ];

  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>

      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.top}>
              <span className={styles.badge}>🏆 {cert.year}</span>
              <h3>{cert.title}</h3>
              <h4>{cert.org}</h4>
            </div>

            <p>{cert.desc}</p>

            <a href={cert.link} target="_blank" rel="noreferrer">
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};