import React, { useState, useEffect, ReactElement } from "react";
import styles from "./header.module.scss";
import dino from "../../img/png/dino.webp";
import Navigation from "./nav/navigation";
import LngButton from "./lngButton/lngButton";
import MobileMenu from "./mobileMenu/mobileMenu";
import MobileMenuButton from "./mobileMenuButton/mobileMenuButton";

const Header = (): ReactElement => {
  const [bgActive, setBgActive] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (
        window.scrollY >= 65 &&
        !(
          window.scrollY >=
          document.documentElement.scrollHeight - window.innerHeight * 1.05
        )
      )
        setBgActive(true);
      else setBgActive(false);
    });
  }, []);

  return (
    <>
      <MobileMenu active={menuActive} setActive={setMenuActive} />
      <header className={`${styles.container} ${bgActive && styles.active}`}>
        <a href="#" className={styles.dino}>
          <img src={dino} alt="LOGO" height={"100%"}></img>
        </a>

        <section className={styles.menu}>
          <Navigation />
          <LngButton />
          <MobileMenuButton
            isActive={menuActive}
            setMenuActive={setMenuActive}
          />
        </section>
      </header>
    </>
  );
};

export default Header;
