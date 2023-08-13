import React, { ReactElement, useState } from "react";
import styles from "./lngButton.module.scss";
import { useTranslation } from "react-i18next";

const LngButton = (): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const handleLng = (lng: "en" | "ru" | "by"): void => {
    i18n.changeLanguage(lng);
    setIsActive(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {t("header.language")}
      </button>
      <div className={`${styles.content} ${isActive && styles.active}`}>
        <button onClick={() => handleLng("ru")}>Русский</button>
        <button onClick={() => handleLng("en")}>English</button>
      </div>
    </div>
  );
};

export default LngButton;
