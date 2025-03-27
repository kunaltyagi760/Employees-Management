import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store/index";
import EmployeeList from "./components/employeeList";
import EmployeeFormPage from "./pages/employeeFromPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeFormPage />} />
          <Route path="/edit/:id" element={<EmployeeFormPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
