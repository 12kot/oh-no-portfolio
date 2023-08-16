import React, { ReactElement } from "react";
import styles from "./formContent.module.scss";
import Input from "./input/input";
import Submit from "./submit/submit";
import { sendMail } from "store/slices/appSlice";
import { useAppDispatch } from "hooks/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { formType } from "types/types";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const FormContent = (): ReactElement => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<formType>({ mode: "onChange" });

  const onSubmit: SubmitHandler<formType> = (data) => {
    dispatch(sendMail(data));
    reset();
  };

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
        label={t(`form.firstname`)}
        placeholder={t(`nikitosha`)}
        required={true}
        invalid={!!errors?.firstName}
        register={register("firstName", {
          required: "onBlur",
        })}
      />

      <div className={styles.rowInput}>
        <Input
          label={t(`form.email`)}
          placeholder={t(`form.emailExample`)}
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
          label={t(`form.telegram`)}
          placeholder={t(`form.telegramExample`)}
          required={false}
          register={register("telegram")}
        />
      </div>

      <Input
        label={t(`form.message`)}
        placeholder={t(`form.messageExample`)}
        required={true}
        invalid={!!errors?.message}
        isTextarea={true}
        register={register("message", {
          required: true,
          minLength: 10,
        })}
      />

      <Submit value={t(`form.send`)} disabled={!isValid} />
    </motion.form>
  );
};

export default FormContent;
