import React, {ReactElement} from 'react'
import styles from "./links.module.scss";
import { linkType } from "types/types";

import { v4 } from "uuid";
import OpenPageSVG from "img/svg/openPage";
import GithubSVG from "img/svg/github";

const getLinks = (links: linkType[]): ReactElement[] => {
    return links.map((item) => (
      <a className={styles.link} href={item.link} target="_blank" key={v4()} rel="noreferrer">
        <p>{item.desc}</p>
        {item.image === "github" ? <GithubSVG /> : <OpenPageSVG />}
      </a>
    ));
  };

const Links = ({links}: {links: linkType[]}): ReactElement => {
  return (
    <span className={styles.links}>{getLinks(links)}</span>

  )
}

export default Links