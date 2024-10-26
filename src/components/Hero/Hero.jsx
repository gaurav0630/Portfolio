import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gaurav</h1>
        <p className={styles.description}>
        I'm a Software Engineer with expertise in React, Node.js, and C#. <br />
        {/* I build responsive, scalable applications and streamline backend services.  */}
        Reach out to discuss how I can help with your next project!
        </p>
        <a href="mailto:gaurav2001verma11@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile1.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{padding: "40px"}}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};