import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [{ name: "Dashboard", path: "/" }], // default tab
  activeTab: "/",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    addTab: (state, action) => {
      const exists = state.tabs.find((t) => t.path === action.payload.path);
      if (!exists) {
        state.tabs.push(action.payload);
      }
      state.activeTab = action.payload.path;
    },
    removeTab: (state, action) => {
      state.tabs = state.tabs.filter((t) => t.path !== action.payload);
      // set active tab to last one if current removed
      if (state.activeTab === action.payload && state.tabs.length > 0) {
        state.activeTab = state.tabs[state.tabs.length - 1].path;
      }
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { addTab, removeTab, setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
