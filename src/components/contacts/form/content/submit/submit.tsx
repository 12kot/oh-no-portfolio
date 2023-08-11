import React, { ReactElement, useEffect } from "react";
import styles from "./submit.module.scss";
import Loader from "components/ui/loader/loader";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { sendMail, setSendStatus } from "store/slices/appSlice";

interface Props {
  value: string;
}

const Submit = (props: Props): ReactElement => {
  const { sendMailLoading: isLoading, sendMailStatus } = useAppSelector(
    (state) => state.app
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (sendMailStatus)
      setTimeout(() => {
        dispatch(setSendStatus({ status: null }));
      }, 4000);
  }, [dispatch, sendMailStatus]);

  const handleCLick = () => {
    dispatch(sendMail());
    alert("Пока не работает. ТГ - kod41");
  };

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
      onClick={() => {
        handleCLick();
      }}
      disabled={isLoading || !!sendMailStatus}
    >
      {getText()}
    </button>
  );
};

export default Submit;
