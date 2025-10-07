"use client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employeeSlice";
import tabsReducer from "./slices/tabsSlice";
import authReducer from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    tabs: tabsReducer,
    auth: authReducer,
  },
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
