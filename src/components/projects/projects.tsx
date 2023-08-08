import React, { ReactElement } from "react";
import styles from "./projects.module.scss";
import Items from "./items/items";

const Projects = (): ReactElement => {
  return (
    <main className={styles.container} id="projects">
      <Items />
    </main>
  );
};

export default Projects;
