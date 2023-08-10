import React from "react";
import styles from "./textBG.module.scss";

const getStr = (text: string, count: number) => {
  return text.toUpperCase().replaceAll(" ", "").repeat(count);
};

const TextBG = ({text, count, bg}: { text: string, count: number, bg?: string }) => {
  return <div className={`${styles.bg}`} style={{backgroundColor: bg, color: bg}}>{getStr(text, count)}</div>;
};

export default TextBG;
