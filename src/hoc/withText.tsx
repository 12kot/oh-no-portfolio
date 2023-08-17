import React, { ReactElement } from "react";
import { Trans, useTranslation } from "react-i18next";
import { getTextType } from "types/types";

const withText = <T extends getTextType>(Component: React.ComponentType<T>) => {
  return (props: any) => {
    const { t, i18n } = useTranslation();

    const setText = (lng: "en" | "ru" | "by"): void => {
      i18n.changeLanguage(lng);
    };

    const getText = (path: string): string => {
      return t(path);
    };

    const getTextComponent = (path: string): ReactElement => {
      return <Trans i18nKey={path} t={t} components={{ b: <b></b> }} />;
    };

    return (
      <Component
        setText={setText}
        getText={getText}
        getTextComponent={getTextComponent}
        {...props}
      />
    );
  };
};

export default withText;
