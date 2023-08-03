import React, { ReactElement } from "react";
import styles from "./main.module.scss";
import Particles from "../particles/particles";

//import { motion, useScroll, useTransform } from "framer-motion";
import Scrolldown from "../../img/svg/scrolldown";
import { v4 } from "uuid";

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
  return text.split("").map((char, i) => (
    <h1
      key={v4()}>
      {char}
    </h1>
  ));
};

const Main = () => {
    return (
    <>
      <Particles />
        <main className={styles.main} id="#">
        <section className={styles.text}>
          <div  className={styles.item}>
            {getText("WHO'S")}
          </div>
          <div className={`${styles.name} ${styles.item}`}
          >
            {getText("NIKITOSHA ?")}
          </div>
        </section>

        <a href="#about" className={styles.scroll}>
          <Scrolldown />
        </a>
      </main>
    </>
  );
};

export default Main;
