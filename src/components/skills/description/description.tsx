import React, { ReactElement } from "react";
import styles from "./description.module.scss";
import omNom from "img/gif/omNomClick.gif";
import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";
import { getTextType } from "types/types";
import withText from "hoc/withText";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.3,
});

const Description = ({ getTextComponent }: getTextType): ReactElement => {
  return (
    <section className={styles.box}>
      <motion.img
        custom={1}
        variants={animSettings}
        className={styles.image}
        src={omNom}
        alt="omNom"
      />
      <div className={styles.description}>
        <motion.h2 custom={1} variants={animSettings} className={styles.header}>
          {getTextComponent("skills.header")}
        </motion.h2>
        <motion.p custom={2} variants={animSettings}>
          {getTextComponent("skills.text")}
        </motion.p>
      </div>
    </section>
  );
};

export default withText(Description);
