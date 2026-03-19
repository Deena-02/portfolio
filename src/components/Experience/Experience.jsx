import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.timeline}>
        {history.map((item, index) => (
          <div key={index} className={styles.card}>
            
            {/* LEFT TIMELINE LINE + DOT */}
            <div className={styles.timelineLeft}>
              <div className={styles.dot}></div>
              <div className={styles.line}></div>
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
              <div className={styles.header}>
                <h3>{item.role}</h3>
                <span>{item.startDate} - {item.endDate}</span>
              </div>

              <h4>{item.organisation}</h4>

              <ul>
                {item.experiences.map((exp, i) => (
                  <li key={i}>✔ {exp}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};