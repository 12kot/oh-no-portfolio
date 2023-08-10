import React, { ReactElement } from "react";
import styles from "./header.module.scss";

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <h3>
        <b>Contact Nikitosha</b>
      </h3>
    </header>
  );
};

export default Header;
