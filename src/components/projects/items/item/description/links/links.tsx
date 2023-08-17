import React, { ReactElement } from "react";
import styles from "./links.module.scss";
import { getTextType, linkType } from "types/types";

import { v4 } from "uuid";
import OpenPageSVG from "img/svg/openPage";
import GithubSVG from "img/svg/github";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";
import withText from "hoc/withText";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.4,
});

const getLinks = (
  links: linkType[],
  getText: (path: string) => string
): ReactElement[] => {
  return links.map((item) => (
    <a
      className={styles.link}
      href={item.link}
      target="_blank"
      key={v4()}
      rel="noreferrer"
    >
      <p>{getText(`projects.${item.desc}`)}</p>
      {item.image === "github" ? <GithubSVG /> : <OpenPageSVG />}
    </a>
  ));
};

interface Props extends getTextType {
  links: linkType[];
}

const Links = ({ links, getText }: Props): ReactElement => {
  return (
    <motion.span custom={4} variants={animSettings} className={styles.links}>
      {getLinks(links, getText)}
    </motion.span>
  );
};

export default withText(Links);
