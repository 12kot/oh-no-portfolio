import React, { ReactElement } from "react";
import styles from "./description.module.scss";

import GithubSVG from "img/svg/github";
import Blob from "./blob/blob";
import LinkedInSVG from "img/svg/linkedIn";
import TelegramSVG from "img/svg/telegram";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";
import { getTextType } from "types/types";
import withText from "hoc/withText";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.4,
});

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
    <motion.a
      custom={2 + i}
      variants={animSettings}
      className={styles.item}
      href={media.link}
      target="_blank"
      rel="noreferrer"
      key={i}
    >
      {media.svg()}
    </motion.a>
  ));

const Description = ({ getTextComponent }: getTextType) => {
  return (
    <article className={styles.container}>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        className={styles.info}
      >
        <motion.h2 custom={1} variants={animSettings} className={styles.header}>
          {getTextComponent("about.header")}
        </motion.h2>
        <motion.p custom={2} variants={animSettings}>
          {getTextComponent("about.text")}
        </motion.p>
        <motion.div className={styles.contacts}>{getMedias()}</motion.div>
      </motion.section>
      <Blob />
    </article>
  );
};

export default withText(Description);
