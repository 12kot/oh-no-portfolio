import React from "react";
import Tech from "./technologies/tech";
import Links from "./links/links";
import { projectType } from "types/types";
import styles from "./description.module.scss";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  y: {
    from: 50,
    to: 0,
  },
  duration: 0.4,
});

const Description = (props: { item: projectType; imgLeft: boolean }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.description} ${props.imgLeft && styles.left}`}>
      <motion.header custom={1} variants={animSettings}>
        <h3>
          <b>{t(`projects.${props.item.name}.header`)}</b>
        </h3>
      </motion.header>

      <motion.p custom={2} variants={animSettings}>
        {t(`projects.${props.item.name}.text`)}
      </motion.p>
      <Tech tech={props.item.tech} />
      <Links links={props.item.links} />
    </div>
  );
};

export default Description;
