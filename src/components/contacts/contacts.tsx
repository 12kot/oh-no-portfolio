import React, { ReactElement } from "react";
import styles from "./contacts.module.scss";
import TextBG from "components/textBG/textBG";
import Form from "./form/form";

const Contacts = (): ReactElement => {
  return (
    <main className={styles.container} id="contacts">
      <TextBG text="NIKITOSHA" count={300} />
      <Form />
    </main>
  );
};

export default Contacts;
