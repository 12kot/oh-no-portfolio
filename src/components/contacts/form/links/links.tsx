import React, { ReactElement } from "react";
import styles from "./links.module.scss";
import GithubSVG from "img/svg/github";
import LinkedInSVG from "img/svg/linkedIn";
import TelegramSVG from "img/svg/telegram";
import { v4 } from "uuid";
import EmailSVG from "img/svg/email";

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
  return links.map((link) => (
    <a
      className={styles.link}
      href={link.link}
      target="_blank"
      key={v4()}
      rel="noreferrer"
    >
      <link.img />
    </a>
  ));
};

const Links = (): ReactElement => {
  return <footer className={styles.links}>{getLinks()}</footer>;
};

export default Links;
