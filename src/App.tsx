import React from "react";
import styles from "./App.module.scss";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Main from "./components/main/main";
import About from "./components/about/about";
import Projects from "components/projects/projects";
import Skills from "components/skills/skills";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Banner /> */}
    </>
  );
};

export default App;
