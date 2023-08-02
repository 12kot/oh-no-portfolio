import React, { ReactElement } from "react";
import styles from "./banner.module.scss";
import dino from "../../img/dino.webp"

const getALotOfText = (text: string, count: number): string => {
  return text.toUpperCase().repeat(count);
};

const Banner = (): ReactElement => {
  return (
    <div className={styles.container}>
          <p className={styles.text}>{getALotOfText("NIKITOSHA", 246)}</p>
          <img className={styles.img} src={dino} alt="dino"></img>
    </div>
  );
};

export default Banner;
