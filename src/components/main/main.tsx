import React, { ReactElement } from "react";
import styles from "./main.module.scss";
import Particles from "../particles/aLotOfParticles/particles";

//import { motion, useScroll, useTransform } from "framer-motion";
import Scrolldown from "img/svg/scrolldown/scrolldown";
import { v4 } from "uuid";
import { useTranslation } from "react-i18next";

//const delay = 0.1;

// const listVariant = {
//   visible: (i: number) => ({
//     opacity: 1,
//     transition: {
//       delay: i * delay,
//     },
//   }),
//   hidden: {
//     opacity: 0,
//   },
// };

const getText = (text: string): ReactElement[] => {
  return text.split("").map((char, i) => <h1 key={v4()}>{char === " " ? <pre> </pre> : char}</h1>);
};

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <Particles count={20} />
      <main className={styles.main} id="#">
        <section className={styles.text}>
          <div className={styles.item}>{getText(t("main.who's"))}</div>
          <div className={`${styles.name} ${styles.item}`}>
            {getText(t("main.nikitosha"))}
          </div>
        </section>

        <Scrolldown path="#about" />
      </main>
    </>
  );
};

export default Main;
