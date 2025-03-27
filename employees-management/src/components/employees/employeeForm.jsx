import { useState, useEffect } from "react";

function EmployeeForm({ onSubmit, isEdit, employee, disabled }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    if (employee) {
      setFormData({
        first_name: employee.first_name || "",
        last_name: employee.last_name || "",
        email: employee.email || "",
        avatar: employee.avatar || "",
      });
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!isEdit) {
      setFormData({ first_name: "", last_name: "", email: "", avatar: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <h2>{isEdit ? "Edit Employee" : "Add New Employee"}</h2>
      <div className="form-group">
        <label>First Name:</label>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} disabled={disabled} required />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} disabled={disabled} required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={disabled} required />
      </div>
      <div className="form-group">
        <label>Avatar URL:</label>
        <input type="url" name="avatar" value={formData.avatar} onChange={handleChange} disabled={disabled} required />
      </div>
      <button type="submit" className="primary" disabled={disabled}>
        {isEdit ? "Update" : "Add"} Employee
      </button>
    </form>
  );
}

export default EmployeeForm;