import React, { ReactElement } from "react";
import styles from "./mobileMenuButton.module.scss";

type Props = {
  isActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenuButton = ({ isActive, setMenuActive }: Props): ReactElement => {
  return (
    <div className={styles.menuButton}>
      <input
        id={styles.checkbox2}
        className={`${isActive && styles.active}`}
        onClick={() => {
          setMenuActive((prev) => !prev);
        }}
        type="checkbox"
      />
      <label
        className={`${styles.toggle} ${styles.toggle2}`}
        htmlFor={styles.checkbox2}
      >
        <div id={styles.bar4} className={styles.bars}></div>
        <div id={styles.bar5} className={styles.bars}></div>
        <div id={styles.bar6} className={styles.bars}></div>
      </label>
    </div>
  );
};

export default MobileMenuButton;
