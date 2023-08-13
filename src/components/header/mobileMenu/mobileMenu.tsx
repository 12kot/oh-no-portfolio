import React, { ReactElement } from "react";
import styles from "./mobileMenu.module.scss";
import Navigation from "../nav/navigation";

type Props = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>
};

const MobileMenu = (props: Props): ReactElement => {
  return (
    <main className={`${styles.container} ${props.active && styles.active}`}>
      <Navigation isMobile={true} clickFunction={() => props.setActive(false)} />
    </main>
  );
};

export default MobileMenu;
