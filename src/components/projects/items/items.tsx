import React, { ReactElement } from "react";
import styles from "./items.module.scss";
import projects from "./projects.json";
import { projectType } from "types/types";
import Item from "./item/item";
import { v4 } from "uuid";

const proj: projectType[] = projects.projects;

const getProjects = (): ReactElement[] => {
  return proj.map((item, index) => (
    <Item item={item} imgLeft={!(index % 2)} key={v4()} />
  ));
};

const Items = (): ReactElement => {
  return <article className={styles.content}>{getProjects()}</article>
};

export default Items;
