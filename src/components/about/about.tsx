import React from "react";
import styles from "./about.module.scss";
import GithubSVG from "../../img/svg/github";
import Blob from "./blob/blob";

const About = () => {
  return (
    <main className={styles.container} id="about">
      <article className={styles.info}>
        <h2 className={styles.header}>Front-End React Developer 👋</h2>
        <p>
          Hi! <b className={styles.name}>Nikitosha</b> is a passionate Front-End
          React Developer based in Grodno, Belarus. 🌍
        </p>
        <section className={styles.contacts}>
          <a className={styles.item} href="github.com">
            <GithubSVG />
          </a>
          <a className={styles.item} href="github.com">
            <GithubSVG />
          </a>
        </section>
      </article>
      <div className={styles.image}>
        <Blob />
      </div>
    </main>
  );
};

export default About;
