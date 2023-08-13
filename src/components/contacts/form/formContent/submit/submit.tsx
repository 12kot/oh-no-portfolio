import React, { ReactElement, useEffect } from "react";
import styles from "./submit.module.scss";
import Loader from "components/ui/loader/loader";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { setSendStatus } from "store/slices/appSlice";

interface Props {
  value: string;
  disabled: boolean
}

const Submit = (props: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const { sendMailLoading: isLoading, sendMailStatus } = useAppSelector(
    (state) => state.app
  );

  useEffect(() => {
    if (sendMailStatus)
      setTimeout(() => {
        dispatch(setSendStatus({ status: null }));
      }, 4000);
  }, [dispatch, sendMailStatus]);

  const getText = (): ReactElement => {
    if (sendMailStatus === "SUCCESS") return <p>✔</p>;
    if (sendMailStatus === "ERROR") return <p>✖</p>;
    if (isLoading) return <Loader />;

    return <p>{props.value}</p>;
  };

  return (
    <button
      className={`${styles.submit} ${isLoading && styles.loading} ${
        sendMailStatus === "SUCCESS" && styles.success
      } ${sendMailStatus === "ERROR" && styles.error}`}
      type="submit"
      disabled={isLoading || !!sendMailStatus || props.disabled}
    >
      {getText()}
    </button>
  );
};

export default Submit;