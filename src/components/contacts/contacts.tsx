import React, { ReactElement } from "react";
import styles from "./contacts.module.scss";
import TextBG from "components/textBG/textBG";
import Form from "./form/form";
import { useTranslation } from "react-i18next";

const Contacts = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <main className={styles.container} id="contacts">
      <TextBG text={t(`nikitosha`).toUpperCase()} count={300} />
      <Form />
    </main>
  );
};

export default Contacts;
