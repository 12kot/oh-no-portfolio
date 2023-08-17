import React, { ReactElement } from "react";
import styles from "./skills.module.scss";
import Scrolldown from "img/svg/scrolldown/scrolldown";
import Technologies from "./technologies/technologies";
import Description from "./description/description";
import { motion } from "framer-motion";

const Skills = (): ReactElement => {
  return (
    <main className={styles.container} id="skills">
      <Scrolldown path="#projects" />
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
        className={styles.content}
      >
        <Description />
        <Technologies />
      </motion.article>
    </main>
  );
};

export default Skills;
