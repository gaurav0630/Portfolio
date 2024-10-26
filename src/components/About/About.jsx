import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I'm a full-stack developer with expertise in building responsive
                applications using React, Redux, and Material-UI for the frontend, 
                and C# and .NET for backend services.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud & Automation Enthusiast</h3>
              <p>
                I have hands-on experience with cloud technologies like AWS and automation tools
                such as Jenkins, Docker, and Kubernetes to streamline development workflows.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Blockchain icon" />
            <div className={styles.aboutItemText}>
              <h3>Blockchain Developer</h3>
              <p>
                I have worked on blockchain projects integrating smart contracts using Ethereum
                and Metamask, ensuring secure and transparent transactions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
