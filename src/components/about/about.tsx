import React, { ReactElement } from "react";
import styles from "./about.module.scss";
import GithubSVG from "../../img/svg/github";
import Blob from "./blob/blob";
import LinkedInSVG from "../../img/svg/linkedIn";
import TelegramSVG from "../../img/svg/telegram";
import CornerParticles from "components/particles/cornerParticles/particles";
import Scrolldown from "img/svg/scrolldown/scrolldown";

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

const About = (): ReactElement => {
  return (
    <main className={styles.container} id="about">
      <CornerParticles />
      <article className={styles.mainInfo}>
        <section className={styles.info}>
          <h2 className={styles.header}>
            Front-End <b className={styles.name}>React</b> Developer 👋
          </h2>
          <p>
            Hi! <b className={styles.name}>Nikitosha</b> is a passionate
            Front-End React Developer based in Grodno, Belarus. 🌍
          </p>
          <div className={styles.contacts}>
            {getMedias()}
          </div>
        </section>
        <Blob />
      </article>
      <Scrolldown path="#projects"/>
    </main>
  );
};

export default About;
