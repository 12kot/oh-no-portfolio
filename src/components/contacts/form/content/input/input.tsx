import React, { ReactElement } from "react";
import styles from "./input.module.scss";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  isNecessarily: boolean;
  isTextarea?: boolean;
}

const getInput = (
  isTextarea: boolean | undefined,
  placeholder: string,
  type: string
) => {
  if (isTextarea)
    return <textarea placeholder={placeholder} rows={3}></textarea>;

  return <input placeholder={placeholder} type={type}></input>;
};

const Input = (props: Props): ReactElement => {
  return (
    <div className={styles.input}>
      <label htmlFor="">
        {props.label} {props.isNecessarily && <b>*</b>}
      </label>
      {getInput(props.isTextarea, props.placeholder, props.type)}
    </div>
  );
};

export default Input;
