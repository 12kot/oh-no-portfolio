import React from "react";

import { sendMail } from "store/slices/appSlice";
import { useAppDispatch } from "hooks/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { formFieldsType, formType } from "types/types";

const withForm = <T extends formType>(Component: React.ComponentType<T>) => {
  return (props: any) => {
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
        {...props}
      />
    );
  };
};

export default withForm;
