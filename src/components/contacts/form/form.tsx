import React, { ReactElement } from "react";
import styles from "./form.module.scss";
import Header from "./header/header";
import Links from "./links/links";
import FormContent from "./formContent/formContent";
import { motion } from "framer-motion";

const Form = (): ReactElement => {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className={styles.container}
    >
      <Header />
      <FormContent />
      <Links />
    </motion.article>
  );
};

export default Form;
