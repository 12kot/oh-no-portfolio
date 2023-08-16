import React, { ReactElement } from "react";
import styles from "./description.module.scss";
import omNom from "img/gif/omNomClick.gif";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.3,
});

const Description = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
      className={styles.box}
    >
      <motion.img
        custom={1}
        variants={animSettings}
        className={styles.image}
        src={omNom}
        alt="omNom"
      />
      <div className={styles.description}>
        <motion.h2 custom={1} variants={animSettings} className={styles.header}>
          <Trans i18nKey="skills.header" t={t} components={{ b: <b></b> }} />
        </motion.h2>
        <motion.p custom={2} variants={animSettings}>
          <Trans i18nKey="skills.text" t={t} components={{ b: <b></b> }} />
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Description;
