import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.aboutItem}>
                {/* You can re-enable the logo if you want later */}
                {/* <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                /> */}
                <div className={styles.aboutItemText}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3><br/>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p><br/>
                  <ul>
                    {historyItem.experiences.map((experience, expId) => (
                      <li key={expId}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
