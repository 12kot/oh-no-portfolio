import React, { ReactElement } from "react";
import styles from "./navigation.module.scss";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";

const nav: string[] = ["about", "skills", "projects", "contacts"];

const getNav = (t: TFunction<"translation", undefined>, clickFunction?: () => void): ReactElement[] => {
  return nav.map((item) => (
    <li key={item} onClick={clickFunction}>
      <a href={`#${item.toLowerCase()}`}>{t(`header.${item}`)}</a>
    </li>
  ));
};

type Props = {
  isMobile?: boolean;
  clickFunction?: () => void;
};

const Navigation = ({ isMobile, clickFunction }: Props): ReactElement => {
  const { t } = useTranslation();
  
  return (
    <nav className={`${styles.nav} ${isMobile && styles.mobile}`}>
      <ul>{getNav(t, clickFunction)}</ul>
    </nav>
  );
};

export default Navigation;
