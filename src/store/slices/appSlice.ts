import { createSlice } from "@reduxjs/toolkit";

interface appType { }
const initialState: appType = {}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
})

export default appSlice;