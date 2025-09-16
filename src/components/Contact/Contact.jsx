import React from "react";

import styles from "./Contact.module.css";
{/*import { getImageUrl } from "../../utils";*/}
import {FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!   </p><br />
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <FaEnvelope className={styles.icon} />
          <a href="mailto:myemail@email.com">deena1202m@gmail.com</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin className={styles.icon} />
          <a href="https://www.linkedin.com/in/m-deena-1048032b6">https://www.linkedin.com/in/m-deena-1048032b6</a>
        </li>
        <li className={styles.link}>
          <FaGithub className={styles.icon} />
          <a href="https://github.com/Deena-02">https://github.com/Deena-02</a>
        </li>
      </ul>
    </footer>
  );
};