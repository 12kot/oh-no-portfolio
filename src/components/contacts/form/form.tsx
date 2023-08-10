import React, { ReactElement } from "react";
import styles from "./form.module.scss";
import Content from "./content/content";
import Header from "./header/header";
import Links from "./links/links";

const Form = (): ReactElement => {
  return (
    <article className={styles.container}>
      <Header />
      <Content />
      <Links />
    </article>
  );
};

export default Form;
