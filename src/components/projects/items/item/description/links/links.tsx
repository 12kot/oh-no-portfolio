import React, { ReactElement } from "react";
import styles from "./links.module.scss";
import { linkType } from "types/types";

import { v4 } from "uuid";
import OpenPageSVG from "img/svg/openPage";
import GithubSVG from "img/svg/github";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const getLinks = (
  links: linkType[],
  t: TFunction<"translation", undefined>
): ReactElement[] => {
  return links.map((item) => (
    <a
      className={styles.link}
      href={item.link}
      target="_blank"
      key={v4()}
      rel="noreferrer"
    >
      <p>{t(`projects.${item.desc}`)}</p>
      {item.image === "github" ? <GithubSVG /> : <OpenPageSVG />}
    </a>
  ));
};

const Links = ({ links }: { links: linkType[] }): ReactElement => {
  const { t } = useTranslation();

  return <span className={styles.links}>{getLinks(links, t)}</span>;
};

export default Links;
