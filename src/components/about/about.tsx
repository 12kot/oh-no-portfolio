import React, { ReactElement } from "react";
import styles from "./about.module.scss";
import CornerParticles from "components/particles/cornerParticles/particles";
import Scrolldown from "img/svg/scrolldown/scrolldown";
import Description from "./description/description";

const About = (): ReactElement => {
  return (
    <main className={styles.container} id="about">
      <CornerParticles />

      <Description />

      <Scrolldown path="#skills"/>
    </main>
  );
};

export default About;
