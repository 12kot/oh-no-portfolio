import React, { ReactElement } from "react";
import styles from "./input.module.scss";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  isTextarea?: boolean;
}

const getInput = (
  isTextarea: boolean | undefined,
  placeholder: string,
  type: string,
  required: boolean
) => {
  if (isTextarea)
    return <textarea placeholder={placeholder} rows={3} required={required}></textarea>;

  return <input placeholder={placeholder} type={type} required={required}></input>;
};

const Input = (props: Props): ReactElement => {
  return (
    <div className={styles.input}>
      <label htmlFor="">
        {props.label} {props.required && <b>*</b>}
      </label>
      {getInput(props.isTextarea, props.placeholder, props.type, props.required)}
    </div>
  );
};

export default Input;
