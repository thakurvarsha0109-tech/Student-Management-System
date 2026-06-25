function StudentTable({ students, deleteStudent }) {
  const getGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    return "F";
  };

  const getStatus = (marks) => {
    return marks >= 40 ? "Pass ✅" : "Fail ❌";
  };

  const highestMarks =
    students.length > 0
      ? Math.max(...students.map((s) => Number(s.marks)))
      : 0;

  if (students.length === 0) {
    return (
      <div className="empty-state">
        <h3>📚 No Student Records Found</h3>
        <p>Add your first student above.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr
              key={student.rollNo}
              className={
                Number(student.marks) === highestMarks
                  ? "top-scorer"
                  : ""
              }
            >
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>{getGrade(Number(student.marks))}</td>
              <td>{getStatus(Number(student.marks))}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteStudent(student.rollNo)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;