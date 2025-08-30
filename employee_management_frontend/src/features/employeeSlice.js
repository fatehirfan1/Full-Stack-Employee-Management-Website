import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

// Fetch employees (admin only)
export const fetchEmployees = createAsyncThunk("employees/fetch", async () => {
  const res = await API.get("/employees");
  return res.data;
});

const employeeSlice = createSlice({
  name: "employees",
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default employeeSlice.reducer;
