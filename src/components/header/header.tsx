import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import dino from "../../img/dino.webp";

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
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className={styles.lng}>lng</button>
      </section>
    </header>
  );
};

export default Header;
