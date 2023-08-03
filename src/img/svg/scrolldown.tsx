import React from "react";
import styles from "./scrolldown.module.scss";

const Scrolldown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
      className={styles.svg}
    >
      <path d="M480-200 240-440l42-42 198 198 198-198 42 42-240 240Zm0-253L240-693l42-42 198 198 198-198 42 42-240 240Z" />
    </svg>
  );
};

export default Scrolldown;
