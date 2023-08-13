import React, { ReactElement } from "react";
import styles from "./navigation.module.scss";

const nav: string[] = ["About", "Skills", "Projects", "Contacts"];

const getNav = (): ReactElement[] => {
  return nav.map((item) => (
    <li key={item}>
      <a href={`#${item.toLowerCase()}`}>{item}</a>
    </li>
  ));
};

const Navigation = ({isMobile}: {isMobile?: boolean}): ReactElement => {
  return (
    <nav className={`${styles.nav} ${isMobile && styles.mobile}`}>
      <ul>{getNav()}</ul>
    </nav>
  );
};

export default Navigation;
