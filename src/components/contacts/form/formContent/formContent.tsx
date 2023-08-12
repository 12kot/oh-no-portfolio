import React, { ReactElement } from "react";
import styles from "./formContent.module.scss";
import Input from "./input/input";
import Submit from "./submit/submit";
import { sendMail } from "store/slices/appSlice";
import { useAppDispatch } from "hooks/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { formType } from "types/types";

const FormContent = (): ReactElement => {
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
    <form className={styles.form} action="" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Firstname"
        placeholder="Nikitosha"
        required={true}
        invalid={!!errors?.firstName}
        register={register("firstName", {
          required: "onBlur",
        })}
      />

      <div className={styles.rowInput}>
        <Input
          label="Email"
          placeholder="krutoi.email@gmail.com"
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
          label="Telegram"
          placeholder="kod41"
          required={false}
          register={register("telegram")}
        />
      </div>

      <Input
        label="Message"
        placeholder="Odnajdy mne na golovu upal kirpich i ya stal bananom..."
        required={true}
        invalid={!!errors?.message}
        isTextarea={true}
        register={register("message", {
          required: true,
          minLength: 10,
        })}
      />

      <Submit value={"Send"} disabled={!isValid} />
    </form>
  );
};

export default FormContent;
