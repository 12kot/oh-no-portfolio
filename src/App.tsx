import React from 'react';
import styles from "./App.module.scss"
import Banner from './components/banner/banner';

const App = () => {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
}

export default App;
