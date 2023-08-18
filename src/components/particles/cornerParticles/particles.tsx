import React from "react";
import styles from "./particles.module.scss";
import dino from "img/png/dino.webp";
import amNam1 from "img/png/amNam1.webp";
import amNam2 from "img/png/amNam2.webp";

const CornerParticles = () => {
  return (
    <div className={styles.container}>
      <img src={dino} alt=""></img>
      <img src={amNam1} alt=""></img>
      <img src={amNam2} alt=""></img>
    </div>
  );
};

export default CornerParticles;
