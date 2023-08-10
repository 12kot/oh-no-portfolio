import React, { ReactElement } from 'react';
import styles from "./submit.module.scss";

interface Props {
  value: string
}

const Submit = (props: Props): ReactElement => {
  return (
    <input
      className={styles.submit}
      type="submit"
      onClick={() => {
        alert("Пока не работает. ТГ - kod41");
      }}
      value={props.value}
      ></input>
  )
}

export default Submit