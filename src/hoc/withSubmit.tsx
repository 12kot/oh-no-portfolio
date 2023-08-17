import { useAppDispatch, useAppSelector } from "hooks/hooks";
import React, { useEffect } from "react";
import { setSendStatus } from "store/slices/appSlice";

interface Props {
  isLoading: boolean;
  sendMailStatus: "ERROR" | "SUCCESS" | null;
}

const withSubmit = <T extends Props>(Component: React.ComponentType<T>) => {
  return (props: any) => {
    const dispatch = useAppDispatch();
    const { sendMailLoading, sendMailStatus } = useAppSelector(
      (state) => state.app
    );

    useEffect(() => {
      if (sendMailStatus)
        setTimeout(() => {
          dispatch(setSendStatus({ status: null }));
        }, 4000);
    }, [dispatch, sendMailStatus]);

    return (
      <Component
        isLoading={sendMailLoading}
        sendMailStatus={sendMailStatus}
        {...props}
      />
    );
  };
};

export default withSubmit;
