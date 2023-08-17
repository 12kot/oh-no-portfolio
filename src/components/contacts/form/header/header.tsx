import React, { ReactElement } from "react";
import styles from "./header.module.scss";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";
import { getTextType } from "types/types";
import withText from "hoc/withText";

const animSettings = GetAnimationSettings({
  duration: 0.5,
});

const Header = ({getText}: getTextType): ReactElement => {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      className={styles.header}
    >
      <motion.h3 custom={1} variants={animSettings}>
        <b>{getText(`form.header`)}</b>
      </motion.h3>
    </motion.header>
  );
};

export default withText(Header);
