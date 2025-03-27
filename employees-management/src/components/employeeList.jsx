// src/components/employees/EmployeeList.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../features/employees/employeeSlice";
import EmployeeCard from "@components/employees/EmployeeCard";

function EmployeeList() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { employees, loading, error } = useSelector((state) => state.employees);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleEdit = (employee) => {
        navigate(`/edit/${employee.id}`);
    };

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id));
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="container">
            <div className="header-section">
                <h1>Employee Management</h1>
                <button className="primary" onClick={() => navigate("/add")}>
                    Add New Employee
                </button>
            </div>

            <div className="employees-grid">
                {employees.map((employee) => (
                    <EmployeeCard key={employee.id} employee={employee} onEdit={handleEdit} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}

export default EmployeeList;