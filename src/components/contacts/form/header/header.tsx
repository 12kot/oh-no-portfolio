import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  duration: 0.5,
});

const Header = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      className={styles.header}
    >
      <motion.h3 custom={1} variants={animSettings}>
        <b>{t(`form.header`)}</b>
      </motion.h3>
    </motion.header>
  );
};

export default Header;
