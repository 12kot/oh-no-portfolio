import React, { ReactElement } from "react";
import styles from "./links.module.scss";
import { linkType } from "types/types";

import { v4 } from "uuid";
import OpenPageSVG from "img/svg/openPage";
import GithubSVG from "img/svg/github";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.4,
});

const getLinks = (
  links: linkType[],
  t: TFunction<"translation", undefined>
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
      <p>{t(`projects.${item.desc}`)}</p>
      {item.image === "github" ? <GithubSVG /> : <OpenPageSVG />}
    </motion.a>
  ));
};

const Links = ({ links }: { links: linkType[] }): ReactElement => {
  const { t } = useTranslation();

  return <span className={styles.links}>{getLinks(links, t)}</span>;
};

export default Links;
