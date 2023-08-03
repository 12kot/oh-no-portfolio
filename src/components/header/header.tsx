import React, { useState, useEffect, ReactElement } from "react";
import styles from "./header.module.scss";
import dino from "../../img/dino.webp";

const nav: string[] = ["About", "Skills", "Projects", "Contacts"];

const getNav = (): ReactElement[] => {
  return nav.map((item) => (
    <li key={item}>
      <a href={`#${item.toLowerCase()}`}>{item}</a>
    </li>
  ));
};

const Header = () => {
  const [bgActive, setBgActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 65) setBgActive(true);
      else setBgActive(false);
    });
  }, []);

  return (
    <header className={`${styles.container} ${bgActive && styles.active}`}>
      <a href="#" className={styles.dino}>
        <img src={dino} alt="LOGO" height={"100%"}></img>
      </a>

      <section className={styles.menu}>
        <nav className={styles.nav}>
          <ul>{getNav()}</ul>
        </nav>
        <button className={styles.lng}>lng</button>
      </section>
    </header>
  );
};

export default Header;
