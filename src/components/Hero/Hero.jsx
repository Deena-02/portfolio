import React from "react";

import styles from "./Hero.module.css";
//import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>M Deena</h1>
        <p className={styles.description}>
          I'm a passionate full-stack developer skilled in React and NodeJS. I'm eager to learn, grow, and contribute to exciting projects. Let's connect!
        </p>
        <a href="mailto:deena1202m@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};