import React from "react";
import Tech from "./technologies/tech";
import Links from "./links/links";
import { projectType } from "types/types";
import styles from "./description.module.scss";
import { useTranslation } from "react-i18next";

const Description = (props: { item: projectType, imgLeft: boolean }) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.description} ${props.imgLeft && styles.left}`}>
      <header>
        <h3>
          <b>{t(`projects.${props.item.name}.header`)}</b>
        </h3>
      </header>

      <p>{t(`projects.${props.item.name}.text`)}</p>
      <Tech tech={props.item.tech} />
      <Links links={props.item.links} />
    </div>
  );
};

export default Description;
