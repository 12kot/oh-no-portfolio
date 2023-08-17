import React, { ReactElement } from "react";
import styles from "./submit.module.scss";
import Loader from "components/ui/loader/loader";

import { motion } from "framer-motion";
import { GetAnimationSettings } from "components/animation/animation";
import withSubmit from "hoc/withSubmit";

const animSettings = GetAnimationSettings({
  duration: 0.5,
});

interface Props {
  value: string;
  disabled: boolean;
  isLoading: boolean
  sendMailStatus: "ERROR" | "SUCCESS" | null;
}

const Submit = ({ value, disabled, sendMailStatus, isLoading }: Props): ReactElement => {
  
  const getStatus = (status: "ERROR" | "SUCCESS" | null): ReactElement => {
    if (status === "SUCCESS") return <p>✔</p>;
    if (status === "ERROR") return <p>✖</p>;
    if (isLoading) return <Loader />;

    return <p>{value}</p>;
  };

  return (
    <motion.button
      custom={3}
      variants={animSettings}
      className={`${styles.submit} ${isLoading && styles.loading} ${
        sendMailStatus === "SUCCESS" && styles.success
      } ${sendMailStatus === "ERROR" && styles.error}`}
      type="submit"
      disabled={isLoading || !!sendMailStatus || disabled}
    >
      {getStatus(sendMailStatus)}
    </motion.button>
  );
};

export default withSubmit(Submit);
