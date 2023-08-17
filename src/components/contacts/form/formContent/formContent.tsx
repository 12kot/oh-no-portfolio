import React, { ReactElement } from "react";

import styles from "./formContent.module.scss";
import Input from "./input/input";
import Submit from "./submit/submit";

import { motion } from "framer-motion";
import withForm from "hoc/withForm";

import { formType, getTextType } from "types/types";
import withText from "hoc/withText";

interface Props extends formType, getTextType {}

const FormContent = ({
  register,
  isValid,
  handleSubmit,
  onSubmit,
  errors,
  getText,
}: Props): ReactElement => {
  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className={styles.form}
      action=""
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label={getText(`form.firstname`)}
        placeholder={getText(`nikitosha`)}
        required={true}
        invalid={!!errors?.firstName}
        register={register("firstName", {
          required: "onBlur",
        })}
      />

      <div className={styles.rowInput}>
        <Input
          label={getText(`form.email`)}
          placeholder={getText(`form.emailExample`)}
          required={true}
          invalid={!!errors?.email}
          register={register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        <Input
          label={getText(`form.telegram`)}
          placeholder={getText(`form.telegramExample`)}
          required={false}
          register={register("telegram")}
        />
      </div>

      <Input
        label={getText(`form.message`)}
        placeholder={getText(`form.messageExample`)}
        required={true}
        invalid={!!errors?.message}
        isTextarea={true}
        register={register("message", {
          required: true,
          minLength: 10,
        })}
      />

      <Submit value={getText(`form.send`)} disabled={!isValid} />
    </motion.form>
  );
};

export default withText(withForm(FormContent));
