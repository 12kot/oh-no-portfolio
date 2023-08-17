import React, { ReactElement } from "react";
import Tech from "./technologies/tech";
import Links from "./links/links";
import { getTextType, projectType } from "types/types";
import styles from "./description.module.scss";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";
import withText from "hoc/withText";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.4,
});

interface Props extends getTextType {
  item: projectType;
  imgLeft: boolean;
}

const Description = ({ item, imgLeft, getText }: Props): ReactElement => {
  return (
    <div className={`${styles.description} ${imgLeft && styles.left}`}>
      <motion.header custom={1} variants={animSettings}>
        <h3>
          <b>{getText(`projects.${item.name}.header`)}</b>
        </h3>
      </motion.header>

      <motion.p custom={2} variants={animSettings}>
        {getText(`projects.${item.name}.text`)}
      </motion.p>
      <Tech tech={item.tech} />
      <Links links={item.links} />
    </div>
  );
};

export default withText(Description);
