import React, { ReactElement } from "react";
import styles from "./navigation.module.scss";

const nav: string[] = ["About", "Skills", "Projects", "Contacts"];

const getNav = (clickFunction?: () => void): ReactElement[] => {
  return nav.map((item) => (
    <li key={item} onClick={clickFunction}>
      <a href={`#${item.toLowerCase()}`}>{item}</a>
    </li>
  ));
};

type Props = {
  isMobile?: boolean;
  clickFunction?: () => void;
};

const Navigation = ({ isMobile, clickFunction }: Props): ReactElement => {
  return (
    <nav className={`${styles.nav} ${isMobile && styles.mobile}`}>
      <ul>{getNav(clickFunction)}</ul>
    </nav>
  );
};

export default Navigation;
