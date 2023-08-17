import React, { ReactElement } from "react";
import styles from "./tech.module.scss";
import { v4 } from "uuid";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.4,
});

const getTech = (tech: string[]): ReactElement[] => {
  return tech.map((item) => (
    <p className={styles.techItem} key={v4()}>
      <b>{item}</b>
    </p>
  ));
};

const Tech = ({ tech }: { tech: string[] }): ReactElement => {
  return (
    <motion.span custom={3} variants={animSettings} className={styles.tech}>
      {getTech(tech)}
    </motion.span>
  );
};

export default Tech;
