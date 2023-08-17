import React, { ReactElement } from "react";
import styles from "./technologies.module.scss";

import SassSVG from "img/svg/technologies/sass";
import HtmlSVG from "img/svg/technologies/html";
import CssSVG from "img/svg/technologies/css";
import JsSVG from "img/svg/technologies/js";
import ReactSVG from "img/svg/technologies/react";
import TsSVG from "img/svg/technologies/ts";

import { v4 } from "uuid";
import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";
import withText from "hoc/withText";
import { getTextType } from "types/types";

const tech = [HtmlSVG, CssSVG, SassSVG, JsSVG, TsSVG, ReactSVG];

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.4,
});

const getTech = (): ReactElement[] => {
  return tech.map((Icon, index) => (
    <motion.span custom={4 + index / 2} variants={animSettings} key={v4()}>
      <Icon />
    </motion.span>
  ));
};

const Technologies = ({ getTextComponent }: getTextType): ReactElement => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
      className={styles.technologies}
    >
      <motion.p custom={3} variants={animSettings}>
        {getTextComponent("skills.techStack")}
      </motion.p>
      <motion.hr custom={3} variants={animSettings} />
      <motion.span className={styles.icons}>{getTech()}</motion.span>
    </motion.section>
  );
};

export default withText(Technologies);
