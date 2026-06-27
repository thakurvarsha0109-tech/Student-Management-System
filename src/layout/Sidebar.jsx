import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">
        🎓 StudentSys
      </h2>

      <NavLink to="/dashboard" className="link">
        📊 Dashboard
      </NavLink>

      <NavLink to="/students" className="link">
        👨‍🎓 Students
      </NavLink>

      <NavLink to="/add" className="link">
        ➕ Add Student
      </NavLink>

      <div
        style={{
          marginTop: "50px",
          fontSize: "14px",
          color: "#94a3b8",
        }}
      >
        Student Performance
        Analytics Dashboard
      </div>
    </div>
  );
}

export default Sidebar;