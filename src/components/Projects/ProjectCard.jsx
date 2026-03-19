import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const projectImages = import.meta.glob("../../assets/projects/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  });
  const resolvedImage = projectImages[`../../assets/${imageSrc}`];

  return (
    <div className={styles.card}>

      {resolvedImage ? (
        <img src={resolvedImage} alt={title} className={styles.projectImage} />
      ) : (
        <div className={styles.imagePlaceholder}>
          <p>Image not found</p>
        </div>
      )}

      {/* CONTENT */}
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        {/* SKILLS */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <span key={id}>{skill}</span>
          ))}
        </div>

        {/* LINKS */}
        <div className={styles.actions}>
          <a href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={source} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

    </div>
  );
};