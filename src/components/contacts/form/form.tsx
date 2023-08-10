import React, { ReactElement } from "react";
import styles from "./form.module.scss";

const Form = (): ReactElement => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h3>
          <b className={styles.important}>Contact Nikitosha</b>
        </h3>
      </header>
      <section className={styles.content}>
        <form className={styles.form}>
          <div className={styles.input}>
            <label htmlFor="">
              Firstname <b className={styles.important}>*</b>
            </label>
            <input placeholder="Nikitosha" type="text"></input>
          </div>
          <div className={styles.rowInput}>
            <div className={styles.input}>
              <label htmlFor="">
                Email <b className={styles.important}>*</b>
              </label>
              <input placeholder="krutoi.email@gmail.com" type="email"></input>
            </div>
            <div className={styles.input}>
              <label htmlFor="">Telegram</label>
              <input placeholder="kod41" type="text"></input>
            </div>
          </div>
          <div className={styles.input}>
            <label htmlFor="">
              Message <b className={styles.important}>*</b>
            </label>
            <textarea
              placeholder="Odnajdy mne na golovu upal kerpich i ya stal bananom..."
              rows={3}
            ></textarea>
          </div>
          <input
            className={styles.submit}
            type="submit"
            onClick={() => {
              alert("Пока не работает. ТГ - kod41");
            }}
            value="Send"
          ></input>
        </form>
      </section>
      <section className={styles.links}>Links</section>
    </article>
  );
};

export default Form;
