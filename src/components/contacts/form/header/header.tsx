import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { useTranslation } from "react-i18next";

const Header = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <h3>
        <b>{t(`form.header`)}</b>
      </h3>
    </header>
  );
};

export default Header;
