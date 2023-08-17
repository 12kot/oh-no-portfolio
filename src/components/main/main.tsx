import React, { ReactElement } from "react";
import styles from "./main.module.scss";
import Particles from "../particles/aLotOfParticles/particles";

import { motion } from "framer-motion";
import Scrolldown from "img/svg/scrolldown/scrolldown";
import { v4 } from "uuid";
import { GetAnimationSettings } from "components/animation/animation";
import { getTextType } from "types/types";
import withText from "hoc/withText";

const getText = (text: string): ReactElement[] => {
  return text
    .split("")
    .map((char, i) => <h1 key={v4()}>{char === " " ? <pre> </pre> : char}</h1>);
};

const Main = ({getText: getTranslateText}: getTextType) => {
  return (
    <>
      <Particles count={20} />
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        className={styles.main}
        id="#"
      >
        <section className={styles.text}>
          <motion.span
            custom={1}
            variants={GetAnimationSettings({
              duration: 0.3,
            })}
            className={styles.item}
          >
            {getText(getTranslateText("main.who's"))}
          </motion.span>
          <motion.span
            custom={2}
            variants={GetAnimationSettings({
              duration: 0.3,
            })}
            className={`${styles.name} ${styles.item}`}
          >
            {getText(getTranslateText("main.nikitosha"))}
          </motion.span>
        </section>

        <Scrolldown path="#about" />
      </motion.main>
    </>
  );
};

export default withText(Main);
