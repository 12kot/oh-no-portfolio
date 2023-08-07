import React from 'react';
import styles from "./descriprion.module.scss";
import omNom from "img/gif/omNomClick.gif";

const Descriprion = () => {
  return (
    <section className={styles.box}>
          <img className={styles.image} src={omNom} alt="omNom" />
          <div className={styles.description}>
            <h2 className={styles.header}>
              <b className={styles.important}>Nikitosha's</b> skills
            </h2>
            <p>
              As a <b className={styles.important}>Junior Front-End</b> Developer, Nikitasha has an <b className={styles.important}>impressive </b> arsenal of skills in HTML, CSS, JavaScript, <b className={styles.important}>React</b>, and SCSS.
              Nikitosha excels at <b className={styles.important}>developing</b> and maintaining responsive <b className={styles.important}>websites</b> that offer a smooth user experience. His expertise lies in
              crafting dynamic, engaging interfaces through <b className={styles.important}>writing clean and
              optimized code</b> and utilizing cutting-edge development tools and
              techniques.
            </p>
          </div>
        </section>
  )
}

export default Descriprion