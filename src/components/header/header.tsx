import React, { useState, useEffect, ReactElement } from "react";
import styles from "./header.module.scss";
import dino from "../../img/png/dino.webp";
import Navigation from "./nav/navigation";
import LngButton from "./lngButton/lngButton";
import MobileMenu from "./mobileMenu/mobileMenu";

const Header = () => {
  const [bgActive, setBgActive] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     if (window.scrollY >= 65) setBgActive(true);
  //     else setBgActive(false);
  //   });
  // }, []);

  return (
    <>
      <MobileMenu active={menuActive} />
      <header className={`${styles.container} ${bgActive && styles.active}`}>
        <a href="#" className={styles.dino}>
          <img src={dino} alt="LOGO" height={"100%"}></img>
        </a>

        <section className={styles.menu}>
          <Navigation />
          <LngButton />
          <button className={styles.menuIcon} onClick={() => {setMenuActive((prev) => !prev)}}>M</button>
        </section>
      </header>
    </>
  );
};

export default Header;
