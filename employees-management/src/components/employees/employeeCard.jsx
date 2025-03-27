

function EmployeeCard({ employee, onEdit, onDelete }) {
    return (
      <div className="card">
        <img src={employee.avatar} alt={`${employee.first_name} ${employee.last_name}`} className="avatar" />
        <div className="info">
          <h3>
            {employee.first_name} {employee.last_name}
          </h3>
          <p>{employee.email}</p>
        </div>
        <div className="actions">
          <button className="warning" onClick={() => onEdit(employee)}>
            Edit
          </button>
          <button
            className="danger"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this employee?")) {
                onDelete(employee.id);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  
  export default EmployeeCard;