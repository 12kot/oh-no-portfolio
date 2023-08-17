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
  return links.map((item, index) => (
    <motion.a
      custom={4 + index / 2}
      variants={animSettings}
      className={styles.link}
      href={item.link}
      target="_blank"
      key={v4()}
      rel="noreferrer"
    >
      <p>{getText(`projects.${item.desc}`)}</p>
      {item.image === "github" ? <GithubSVG /> : <OpenPageSVG />}
    </motion.a>
  ));
};

interface Props extends getTextType {
  links: linkType[];
}

const Links = ({ links, getText }: Props): ReactElement => {
  return <span className={styles.links}>{getLinks(links, getText)}</span>;
};

export default withText(Links);
