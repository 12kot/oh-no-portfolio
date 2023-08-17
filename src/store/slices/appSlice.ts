import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { formFieldsType } from "types/types";

interface appType {
  sendMailLoading: boolean;
  sendMailStatus: "ERROR" | "SUCCESS" | null;
}

const initialState: appType = {
  sendMailLoading: false,
  sendMailStatus: null,
};

export const sendMail = createAsyncThunk<void, formFieldsType>(
  "app/sendMail",
  async (props, { rejectWithValue }) => {
    const message =
      `<b>Имя</b>: ${props.firstName}\n` +
      `<b>Email</b>: ${props.email}\n` +
      `<b>Tg</b>: ${props.telegram ? (`@` + props.telegram) : "НЕТ"}\n` +
      `<b>Message</b>: ${props.message}`;

    const URL_API = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_TOKEN}/sendMessage`;

    try {
      const response = await axios.post(URL_API, {
        chat_id: process.env.REACT_APP_TELEGRAM_CHAT_ID,
        parse_mode: "html",
        text: message,
      });

      if (!response.status) return rejectWithValue("");
    } catch (e) {
      console.log(e);
      return rejectWithValue("");
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSendStatus(state, action) {
      state.sendMailStatus = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMail.pending, (state, action) => {
        state.sendMailLoading = true;
      })
      .addCase(sendMail.fulfilled, (state, action) => {
        state.sendMailLoading = false;
        state.sendMailStatus = "SUCCESS";
      })
      .addCase(sendMail.rejected, (state, action) => {
        state.sendMailLoading = false;
        state.sendMailStatus = "ERROR";
      });
  },
});

export default appSlice;
export const { setSendStatus } = appSlice.actions;
