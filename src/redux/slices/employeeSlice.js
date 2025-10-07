import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    list: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
    },
    removeEmployee: (state, action) => {
      state.list = state.list.filter((e) => e.id !== action.payload);
    },
    updateEmployee: (state, action) => {
      const idx = state.list.findIndex((e) => e.id === action.payload.id);
      if (idx !== -1) state.list[idx] = action.payload;
    },
  },
});

export const { addEmployee, removeEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
