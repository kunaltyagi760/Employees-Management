import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EmployeeForm from "../components/employees/employeeForm";
import { addEmployee, updateEmployee } from "../features/employees/employeeSlice";

function EmployeeFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employees.employees.find((emp) => emp.id === id));

  const handleSubmit = (formData) => {
    if (id) {
      dispatch(updateEmployee({ id, updates: formData }));
    } else {
      dispatch(addEmployee(formData));
    }
    navigate("/");
  };

  return (
    <div className="container">
      <button className="primary" onClick={() => navigate("/")}>
        Back to List
      </button>
      <EmployeeForm onSubmit={handleSubmit} isEdit={!!id} employee={employee} disabled={false} />
    </div>
  );
}

export default EmployeeFormPage;