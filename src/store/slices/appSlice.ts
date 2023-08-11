import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface appType {
  sendMailLoading: boolean;
  sendMailStatus: "ERROR" | "SUCCESS" | null;
}

const initialState: appType = {
  sendMailLoading: false,
  sendMailStatus: null,
};

export const sendMail = createAsyncThunk<void, void>(
  "app/sendMail",
  async (_, { rejectWithValue }) => {
    const a = await new Promise((resolve) => setTimeout(resolve, 5000));
    //return rejectWithValue("")
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSendStatus(state, action) {
      state.sendMailStatus = action.payload.status;
      console.log(state.sendMailStatus);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMail.pending, (state, action) => {
        state.sendMailLoading = true;
        console.log(state.sendMailLoading);
      })
      .addCase(sendMail.fulfilled, (state, action) => {
        state.sendMailLoading = false;
        state.sendMailStatus = "SUCCESS";
        console.log(state.sendMailLoading);
      })
      .addCase(sendMail.rejected, (state, action) => {
        state.sendMailLoading = false;
        state.sendMailStatus = "ERROR";
      });
  },
});

export default appSlice;
export const { setSendStatus } = appSlice.actions;
