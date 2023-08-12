import React, { ReactElement } from "react";
import styles from "./input.module.scss";

interface Props {
  label: string;
  placeholder: string;
  required: boolean;
  isTextarea?: boolean;
  invalid?: boolean;
  register: any;
}

const getInput = (
  isTextarea: boolean | undefined,
  placeholder: string,
  invalid: boolean | undefined,
  register: any
) => {
  if (isTextarea)
    return (
      <textarea
        className={`${invalid ? styles.invalid : styles.valid}`}
        placeholder={placeholder}
        rows={3}
        {...register}
      ></textarea>
    );

  return (
    <input
      placeholder={placeholder}
      className={`${invalid ? styles.invalid : styles.valid}`}
      {...register}
    ></input>
  );
};

const Input = (props: Props): ReactElement => {
  return (
    <label className={`${styles.input}`} htmlFor="">
      <p>
        {props.label} {props.required && <b>*</b>}
      </p>
      {getInput(
        props.isTextarea,
        props.placeholder,
        props.invalid,
        props.register
      )}
    </label>
  );
};

export default Input;
