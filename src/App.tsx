import React from 'react';
import styles from "./App.module.scss"
import Banner from './components/banner/banner';
import Header from './components/header/header';

const App = () => {
  return (
    <div className={`${styles.container}`}>
      <Header />
      {/* <Banner /> */}
    </div>
  );
}

export default App;
