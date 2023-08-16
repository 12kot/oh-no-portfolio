import React, { ReactElement } from "react";
import styles from "./input.module.scss";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";

const animSettings = GetAnimationSettings({
  duration: 0.5,
});

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
    <motion.label
      custom={2}
      variants={animSettings}
      className={`${styles.input}`}
      htmlFor=""
    >
      <p>
        {props.label} {props.required && <b>*</b>}
      </p>
      {getInput(
        props.isTextarea,
        props.placeholder,
        props.invalid,
        props.register
      )}
    </motion.label>
  );
};

export default Input;
