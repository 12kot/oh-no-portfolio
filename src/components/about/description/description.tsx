import React, { ReactElement } from "react";
import styles from "./description.module.scss";
import GithubSVG from "img/svg/github";
import Blob from "./blob/blob";
import LinkedInSVG from "img/svg/linkedIn";
import TelegramSVG from "img/svg/telegram";
import { Trans, useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <article className={styles.container}>
      <section className={styles.info}>
        <h2 className={styles.header}>
          <Trans i18nKey="about.header" t={t} components={{ b: <b></b> }} />
        </h2>
        <p>
          <Trans i18nKey="about.text" t={t} components={{ b: <b></b> }} />
        </p>
        <div className={styles.contacts}>{getMedias()}</div>
      </section>
      <Blob />
    </article>
  );
};

export default Description;
