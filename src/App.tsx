import React from "react";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Main from "./components/main/main";
import About from "./components/about/about";
import Projects from "components/projects/projects";
import Skills from "components/skills/skills";
import Contacts from "components/contacts/contacts";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contacts />
      {/* <Banner /> */}
    </>
  );
};

export default App;
