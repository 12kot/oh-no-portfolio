import React, { ReactElement } from "react";
import styles from "./projects.module.scss";
import Items from "./items/items";
import Scrolldown from "img/svg/scrolldown/scrolldown";

const Projects = (): ReactElement => {
  return (
    <main className={styles.container} id="projects">
      <Scrolldown path="#contacts"/>
      <Items />
    </main>
  );
};

export default Projects;
