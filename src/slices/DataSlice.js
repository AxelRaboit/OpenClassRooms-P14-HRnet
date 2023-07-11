import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dataSlice = createSlice({
  name: "data",
  initialState: { value: initialState },
  reducers: {
    addEmployee: (state, action) => {
      state.value.push(action.payload);
    },
    deleteEmployees: (state, action) => {
      state.value = [];
    }
  },
});

export const { addEmployee, deleteEmployees } = dataSlice.actions;

export default dataSlice.reducer;
