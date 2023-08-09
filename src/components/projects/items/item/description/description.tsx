import React from "react";
import Tech from "./technologies/tech";
import Links from "./links/links";
import { projectType } from "types/types";
import styles from "./description.module.scss";

const Description = (props: { item: projectType, imgLeft: boolean }) => {
  return (
    <div className={`${styles.description} ${props.imgLeft && styles.left}`}>
      <header>
        <h3>
          <b className={styles.important}>{props.item.name}</b>
        </h3>
      </header>

      <p>{props.item.description}</p>
      <Tech tech={props.item.tech} />
      <Links links={props.item.links} />
    </div>
  );
};

export default Description;
