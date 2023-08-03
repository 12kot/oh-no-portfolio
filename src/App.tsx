import React from "react";
import styles from "./App.module.scss";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Main from "./components/main/main";

const App = () => {
  return (
    <>
      <Header />
      <div className={`${styles.container}`}>
        <Main />
      </div>
      {/* <Banner /> */}
    </>
  );
};

export default App;
