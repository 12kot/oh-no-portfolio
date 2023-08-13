import React, { ReactElement } from "react";
import styles from "./technologies.module.scss";

import SassSVG from "img/svg/technologies/sass";
import HtmlSVG from "img/svg/technologies/html";
import CssSVG from "img/svg/technologies/css";
import JsSVG from "img/svg/technologies/js";
import ReactSVG from "img/svg/technologies/react";
import TsSVG from "img/svg/technologies/ts";
import { v4 } from "uuid";
import { Trans, useTranslation } from "react-i18next";

const tech = [HtmlSVG, CssSVG, SassSVG, JsSVG, TsSVG, ReactSVG];

const getTech = (): ReactElement[] => {
  return tech.map((Icon) => <Icon key={v4()} />);
};

const Technologies = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className={styles.technologies}>
      <p>
        <Trans i18nKey="skills.techStack" t={t} components={{ b: <b></b> }} />
      </p>
      <hr />
      <span className={styles.icons}>{getTech()}</span>
    </section>
  );
};

export default Technologies;
