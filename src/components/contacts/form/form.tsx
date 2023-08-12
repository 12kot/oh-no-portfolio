import React, { ReactElement } from "react";
import styles from "./form.module.scss";
import Header from "./header/header";
import Links from "./links/links";
import FormContent from "./formContent/formContent";

const Form = (): ReactElement => {
  return (
    <article className={styles.container}>
      <Header />
      <FormContent />
      <Links />
    </article>
  );
};

export default Form;
