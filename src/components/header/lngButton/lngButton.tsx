import React, { ReactElement, useState } from "react";
import styles from "./lngButton.module.scss";
import { getTextType } from "types/types";
import withText from "hoc/withText";

const LngButton = ({getText, setText}: getTextType): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleLng = (lng: "en" | "ru" | "by"): void => {
    setText(lng);
    setIsActive(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {getText("header.language")}
      </button>
      <div className={`${styles.content} ${isActive && styles.active}`}>
        <button onClick={() => handleLng("ru")}>Русский</button>
        <button onClick={() => handleLng("en")}>English</button>
        <button onClick={() => handleLng("by")}>Беларуская</button>
      </div>
    </div>
  );
};

export default withText(LngButton);
