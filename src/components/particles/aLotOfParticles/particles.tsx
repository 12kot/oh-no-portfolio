import React, { ReactElement } from "react";
import styles from "./particles.module.scss";
import dino from "img/png/dino.webp";
import amNam1 from "img/png/amNam1.png";
import amNam2 from "img/png/amNam2.png";
import { v4 } from "uuid";

const pathes = [
  "https://cdn.svgporn.com/logos/sass.svg",
  "https://cdn.svgporn.com/logos/react.svg",
  "https://cdn.svgporn.com/logos/redux.svg",
  "https://cdn.svgporn.com/logos/html-5.svg",
  dino,
  amNam1,
  amNam2,
];

const getImage = (count: number): ReactElement[] => {
  return [...Array(count)].map(() => (
    <img
      src={pathes[Math.floor(Math.random() * pathes.length)]}
      alt="img"
      key={v4()}
      className={`${styles.particle}`}
    />
  ));
};

const Particles = (props: {count: number}) => {
  return <div className={styles.particle_container}>{getImage(props.count)}</div>;
};

export default Particles;
