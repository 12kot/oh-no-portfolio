import React from "react";
import styles from "./textBG.module.scss";

const getStr = (text: string) => {
  return text.toUpperCase().replaceAll(" ", "").repeat(282);
};

const TextBG = ({text}: {text: string}) => {
  return <div className={`${styles.bg}`}>{getStr(text)}</div>;
};

export default TextBG;
