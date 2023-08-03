import React from "react";
import styles from "./App.module.scss";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Main from "./components/main/main";
import About from "./components/about/about";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <div className={`${styles.container}`}>
        <About />
      </div>
      {/* <Banner /> */}
    </>
  );
};

export default App;
