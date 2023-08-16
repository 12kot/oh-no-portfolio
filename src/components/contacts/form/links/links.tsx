import React, { ReactElement } from "react";
import styles from "./links.module.scss";

import { v4 } from "uuid";

import GithubSVG from "img/svg/github";
import LinkedInSVG from "img/svg/linkedIn";
import TelegramSVG from "img/svg/telegram";
import EmailSVG from "img/svg/email";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  duration: 0.5,
});

const links: { img: () => ReactElement; link: string }[] = [
  {
    img: GithubSVG,
    link: "https://github.com/12kot",
  },
  {
    img: LinkedInSVG,
    link: "https://www.linkedin.com/in/12kot/",
  },
  {
    img: TelegramSVG,
    link: "https://www.t.me/kod41",
  },
  {
    img: EmailSVG,
    link: "mailto:yakol.nikita@gmail.com",
  },
];

export const getLinks = () => {
  return links.map((link, index) => (
    <motion.a
      custom={4 + index/2}
      variants={animSettings}
      className={styles.link}
      href={link.link}
      target="_blank"
      key={v4()}
      rel="noreferrer"
    >
      <link.img />
    </motion.a>
  ));
};

const Links = (): ReactElement => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      className={styles.links}
    >
      {getLinks()}
    </motion.footer>
  );
};

export default Links;
