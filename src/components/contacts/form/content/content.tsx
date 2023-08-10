import React, { ReactElement } from "react";
import styles from "./content.module.scss";
import Input from "./input/input";
import Submit from "./submit/submit";

const Content = (): ReactElement => {
  return (
    <form className={styles.form}>
      <Input
        label="Firstname"
        placeholder="Nikitosha"
        isNecessarily={true}
        type="text"
      />

      <div className={styles.rowInput}>
        <Input
          label="Email"
          placeholder="krutoi.email@gmail.com"
          isNecessarily={true}
          type="email"
        />
        <Input
          label="Telegram"
          placeholder="kod41"
          isNecessarily={false}
          type="text"
        />
      </div>

      <Input
        label="Message"
        placeholder="Odnajdy mne na golovu upal kerpich i ya stal bananom..."
        isNecessarily={true}
        type="text"
        isTextarea={true}
      />
      
      <Submit value={"Send"} />
    </form>
  );
};

export default Content;
