import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";

const rootReducer = combineReducers({
    app: appSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 