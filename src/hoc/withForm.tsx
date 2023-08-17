import React, { ReactElement } from "react";

import { sendMail } from "store/slices/appSlice";
import { useAppDispatch } from "hooks/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { formFieldsType, formType } from "types/types";

const withForm = (
  Component: (props: formType) => ReactElement
) => {
  return () => {
    const dispatch = useAppDispatch();

    const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
    } = useForm<formFieldsType>({ mode: "onChange" });

    const onSubmit: SubmitHandler<formFieldsType> = (data) => {
      dispatch(sendMail(data));
      reset();
    };

    return (
      <Component
        register={register}
        isValid={isValid}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    );
  };
};

export default withForm;
