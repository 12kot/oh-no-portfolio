import React, { ReactElement } from "react";
import styles from "./particles.module.scss";
import dino from "../../img/dino.webp";
import { v4 } from "uuid";

const pathes = [
  "https://cdn.svgporn.com/logos/sass.svg",
  "https://cdn.svgporn.com/logos/react.svg",
  "https://cdn.svgporn.com/logos/redux.svg",
  "https://cdn.svgporn.com/logos/html-5.svg",
  dino,
  "https://avatanplus.com/files/resources/original/58824f597bfcc159bd05f5a4.png",
  "https://avatanplus.com/files/resources/original/574ad9e1e8bbd154fc631aa1.png",
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

const Particles = () => {
  return <div className={styles.particle_container}>{getImage(20)}</div>;
};

export default Particles;
