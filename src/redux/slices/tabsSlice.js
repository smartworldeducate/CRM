import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [{ name: "Dashboard", path: "/", refreshKey: 0 }], // default tab
  activeTab: "/",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    addTab: (state, action) => {
      const exists = state.tabs.find((t) => t.path === action.payload.path);
      if (!exists) {
        state.tabs.push({ ...action.payload, refreshKey: 0 });
      }
      state.activeTab = action.payload.path;
    },
    removeTab: (state, action) => {
      state.tabs = state.tabs.filter((t) => t.path !== action.payload);
      if (state.activeTab === action.payload && state.tabs.length > 0) {
        state.activeTab = state.tabs[state.tabs.length - 1].path;
      }
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    refreshTab: (state, action) => {
      const tab = state.tabs.find((t) => t.path === action.payload);
      if (tab) {
        tab.refreshKey += 1; // bump refreshKey
      }
    },
  },
});

export const { addTab, removeTab, setActiveTab, refreshTab } =
  tabsSlice.actions;
export default tabsSlice.reducer;
