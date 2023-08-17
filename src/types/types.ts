import { ReactElement } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface projectType {
  image: string[];
  name: string;
  description: string;
  tech: string[];
  links: linkType[];
}

export interface linkType {
  desc: string;
  link: string;
  image: string;
}

export interface formFieldsType {
  firstName: string;
  email: string;
  telegram: string;
  message: string;
}

export interface formType {
  register: UseFormRegister<formFieldsType>;
  isValid: boolean;
  handleSubmit: UseFormHandleSubmit<formFieldsType, undefined>;
  onSubmit: SubmitHandler<formFieldsType>;
  errors: FieldErrors<formFieldsType>;
}

export interface getTextType {
  setText: (lng: "en" | "ru" | "by") => void;
  getText: (path: string) => string;
  getTextComponent: (path: string) => ReactElement;
}
