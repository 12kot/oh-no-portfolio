import React, { ReactElement } from "react";
import styles from "./amNam.module.scss";
import amNam1 from "img/png/amNam3.webp";
import amNam2 from "img/png/amNam5.webp";
import amNam3 from "img/png/amNam1.webp";
import amNam4 from "img/png/amNam2.webp";

const amNams = [amNam1, amNam2, amNam3, amNam4]

const getAmNam = () => {
  return amNams[Math.ceil(Math.random() * (amNams.length - 1))]
};

const AmNam = ({ isLeft }: { isLeft: boolean }): ReactElement => {
  return (
    <div className={`${styles.container} ${!isLeft && styles.left}`}>
      <img src={getAmNam()} alt="" height={"auto"} width={"auto"}></img>
    </div>
  );
};

export default AmNam;
