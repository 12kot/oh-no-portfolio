import React, { ReactElement } from "react";
import styles from "./item.module.scss";
import { projectType } from "types/types";
import TextBG from "components/textBG/textBG";
import Description from "./description/description";
import AmNam from "./amNam/amNam";

const getImage = (path: string[]): ReactElement => {
  return (
    <div className={`${styles.image}`}>
      <img alt="img" src={require(`img/projects/${path[0]}`)}></img>
      <img alt="img" src={require(`img/projects/${path[0]}`)}></img>
    </div>
  );
};

const Item = (props: { item: projectType; imgLeft: boolean }) => {
  return (
    <div className={styles.box}>
      <AmNam isLeft={props.imgLeft} />
      <section className={`${styles.item} ${props.imgLeft && styles.isLeft}`}>
        <TextBG text={props.item.name} />

        {getImage(props.item.image)}
        <Description {...props} />
      </section>
    </div>
  );
};

export default Item;
