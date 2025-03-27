import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create Async Thunks
export const fetchEmployees = createAsyncThunk("employees/fetchEmployees", async () => {
  const response = await fetch("https://640f55c04ed25579dc4c7a34.mockapi.io/employees");
  const data = await response.json();
  return data;
});

export const addEmployee = createAsyncThunk("employees/addEmployee", async (employee) => {
  const response = await fetch("https://640f55c04ed25579dc4c7a34.mockapi.io/employees", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  const data = await response.json();
  return data;
});

export const updateEmployee = createAsyncThunk("employees/updateEmployee", async ({ id, updates }) => {
  const response = await fetch(`https://640f55c04ed25579dc4c7a34.mockapi.io/employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });
  const data = await response.json();
  return data;
});

export const deleteEmployee = createAsyncThunk("employees/deleteEmployee", async (id) => {
  await fetch(`https://640f55c04ed25579dc4c7a34.mockapi.io/employees/${id}`, {
    method: "DELETE",
  });
  return id;
});

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
        state.error = null;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex((emp) => emp.id === action.payload.id);
        if (index !== -1) {
          state.employees[index] = action.payload;
        }
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter((emp) => emp.id !== action.payload);
      });
  },
});

