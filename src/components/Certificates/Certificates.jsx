import React from "react";
import styles from "./Certificates.module.css";

export const Certificates = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>✔ Google Developer Groups (GDG) Badge – 2024</h3>
              <p>
                <strong>Google</strong> <br />
                Recognition for active participation in Google developer community. <br />
                <a href="https://cdn.qwiklabs.com/Ru6tujyVFgXVIp0w2vaCxtS11aOc1zEM4JQTP8C0iMU%3D">View Certificate</a>
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>✔ Java Programming Certificate – 2023</h3>
              <p>
                <strong>edX</strong> <br />
                Comprehensive Java programming course covering OOP concepts and advanced topics. <br />
                <a href="https://courses.edx.org/certificates/e6698b5e49184131b1c0df5bf01942bb">View Certificate</a>
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>✔ Full Stack Develeopment(MERN) – 2023</h3>
              <p>
                <strong>SmartBridge</strong> <br />
                Extensive training in full-stack MERN development (MongoDB, Express, React, Node.js). <br />
                <a href="https://apsche.smartinternz.com/certificate/student/8a5fae34202f1c81f9f513c81b34b386">View Certificate</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
