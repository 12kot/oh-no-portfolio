import React, { ReactElement } from "react";
import styles from "./description.module.scss";
import GithubSVG from "img/svg/github";
import Blob from "./blob/blob";
import LinkedInSVG from "img/svg/linkedIn";
import TelegramSVG from "img/svg/telegram";

const medias: { link: string; svg: () => ReactElement }[] = [
  {
    link: "https://www.t.me/kod41",
    svg: TelegramSVG,
  },
  {
    link: "https://www.linkedin.com/in/12kot/",
    svg: LinkedInSVG,
  },
  {
    link: "https://github.com/12kot",
    svg: GithubSVG,
  },
];

const getMedias = (): ReactElement[] =>
  medias.map((media, i) => (
    <a
      className={styles.item}
      href={media.link}
      target="_blank"
      rel="noreferrer"
      key={i}
    >
      {media.svg()}
    </a>
  ));

const Description = () => {
  return (
    <article className={styles.container}>
      <section className={styles.info}>
        <h2 className={styles.header}>
          Front-End <b className={styles.important}>React</b> Developer 👋
        </h2>
        <p>
          Hi! <b className={styles.important}>Nikitosha</b> is a passionate Front-End
          React Developer based in Grodno, Belarus. 🌍
        </p>
        <div className={styles.contacts}>{getMedias()}</div>
      </section>
      <Blob />
    </article>
  );
};

export default Description;
