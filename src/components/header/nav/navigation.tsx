import React, { ReactElement } from "react";
import styles from "./navigation.module.scss";
import { getTextType } from "types/types";
import withText from "hoc/withText";

const nav: string[] = ["about", "skills", "projects", "contacts"];

const getNav = (getText: (path: string) => string, clickFunction?: () => void): ReactElement[] => {
  return nav.map((item) => (
    <li key={item} onClick={clickFunction}>
      <a href={`#${item.toLowerCase()}`}>{getText(`header.${item}`)}</a>
    </li>
  ));
};

interface Props extends getTextType {
  isMobile?: boolean;
  clickFunction?: () => void;
};

const Navigation = ({ isMobile, clickFunction, getText }: Props): ReactElement => {
  return (
    <nav className={`${styles.nav} ${isMobile && styles.mobile}`}>
      <ul>{getNav(getText, clickFunction)}</ul>
    </nav>
  );
};

export default withText(Navigation);
