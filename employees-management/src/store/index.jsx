import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "../features/employees/employeeSlice";

const store = configureStore({
    reducer: {
      employees: employeesSlice.reducer,
    },
  });
  
export default store;


