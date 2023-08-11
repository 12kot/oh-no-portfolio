import React, { ReactElement } from "react";
import styles from "./content.module.scss";
import Input from "./input/input";
import Submit from "./submit/submit";
import { sendMail } from "store/slices/appSlice";
import { useAppDispatch } from "hooks/hooks";


const Content = (): ReactElement => {
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(sendMail());
    alert("Пока не работает. ТГ - kod41");

    return false;
  };

  return (
    <form
      className={styles.form}
      action=""
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <Input
        label="Firstname"
        placeholder="Nikitosha"
        required={true}
        type="text"
      />

      <div className={styles.rowInput}>
        <Input
          label="Email"
          placeholder="krutoi.email@gmail.com"
          required={true}
          type="email"
        />
        <Input
          label="Telegram"
          placeholder="kod41"
          required={false}
          type="text"
        />
      </div>

      <Input
        label="Message"
        placeholder="Odnajdy mne na golovu upal kirpich i ya stal bananom..."
        required={true}
        type="text"
        isTextarea={true}
      />

      <Submit value={"Send"} />
    </form>
  );
};

export default Content;
