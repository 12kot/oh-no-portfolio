import React from "react";
import styles from "./description.module.scss";
import omNom from "img/gif/omNomClick.gif";
import { Trans, useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.box}>
      <img className={styles.image} src={omNom} alt="omNom" />
      <div className={styles.description}>
        <h2 className={styles.header}>
          <Trans i18nKey="skills.header" t={t} components={{ b: <b></b> }} />
        </h2>
        <p>
          <Trans i18nKey="skills.text" t={t} components={{ b: <b></b> }} />
        </p>
      </div>
    </section>
  );
};

export default Description;
