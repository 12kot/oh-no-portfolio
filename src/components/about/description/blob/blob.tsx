import React from "react";
import styles from "./blob.module.scss";
import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  y: {
    from: 10,
    to: 0,
  },
  duration: 0.2,
});

const Blob = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
      custom={1}
      variants={animSettings}
      className={styles.wrapper}
    >
      <div className={styles.box}></div>
    </motion.section>
  );
};

export default Blob;
