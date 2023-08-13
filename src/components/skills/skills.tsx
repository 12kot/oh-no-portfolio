import React, { ReactElement } from "react";
import styles from "./skills.module.scss";
import Scrolldown from "img/svg/scrolldown/scrolldown";
import Technologies from "./technologies/technologies";
import Description from "./description/description";

const Skills = (): ReactElement => {
  return (
    <main className={styles.container} id="skills">
      <Scrolldown path="#projects"/>
      <article className={styles.content}>
        <Description />
        <Technologies />
      </article>
    </main>
  );
};

export default Skills;
