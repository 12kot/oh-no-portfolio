import React, { ReactElement } from "react";
import styles from "./item.module.scss";
import { projectType } from "types/types";
import TextBG from "components/textBG/textBG";
import Description from "./description/description";
import AmNam from "./amNam/amNam";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.4,
});

const getImage = (path: string[]): ReactElement => {
  return (
    <motion.div
      custom={1}
      variants={animSettings}
      className={`${styles.image}`}
    >
      <img alt="img" src={require(`img/projects/${path[0]}`)} height={"fit-content"} width={"100%"} />
      <img alt="img" src={require(`img/projects/${path[0]}`)} height={"fit-content"} width={"100%"} />
    </motion.div>
  );
};

const Item = (props: { item: projectType; imgLeft: boolean }) => {
  return (
    <div className={styles.box}>
      <AmNam isLeft={props.imgLeft} />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className={`${styles.item} ${props.imgLeft && styles.isLeft}`}
      >
        <TextBG text={props.item.name.repeat(2)} count={135} />

        {getImage(props.item.image)}
        <Description {...props} />
      </motion.section>
    </div>
  );
};

export default Item;
