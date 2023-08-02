import React from "react";
import styles from "./App.module.scss";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";

const App = () => {
  return (
    <>
      <Header />
      <div className={`${styles.container}`}>
        {/* <Banner /> */}
        <main className={styles.main}>
          <p>WHO'S</p>
          <p className={styles.nikita}>NIKITOSHA ?</p>
        </main>
      </div>
    </>
  );
};

export default App;
