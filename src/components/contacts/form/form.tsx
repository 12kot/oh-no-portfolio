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
          <input placeholder="FirstName"></input>
          <div className={styles.rowInput}>
            <input placeholder="Email"></input>
            <input placeholder="tg optional"></input>
          </div>
          <input placeholder="description"></input>

          <button>Send</button>
        </form>
      </section>
      <section className={styles.links}>Links</section>
    </article>
  );
};

export default Form;
