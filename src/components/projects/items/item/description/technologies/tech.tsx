import React, { ReactElement } from "react";
import styles from "./tech.module.scss";
import { v4 } from "uuid";

const getTech = (tech: string[]): ReactElement[] => {
  return tech.map((item) => (
    <p className={styles.techItem} key={v4()}>
      <b>{item}</b>
    </p>
  ));
};

const Tech = ({ tech }: { tech: string[] }): ReactElement => {
  return <span className={styles.tech}>{getTech(tech)}</span>;
};

export default Tech;
