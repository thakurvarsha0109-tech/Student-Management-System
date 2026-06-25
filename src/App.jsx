import { useState, useEffect } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (rollNo) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      setStudents(
        students.filter(
          (student) => student.rollNo !== rollNo
        )
      );
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const averageMarks =
    students.length > 0
      ? (
          students.reduce(
            (total, student) =>
              total + Number(student.marks),
            0
          ) / students.length
        ).toFixed(2)
      : 0;

  const topScorer =
    students.length > 0
      ? students.reduce((prev, current) =>
          Number(prev.marks) > Number(current.marks)
            ? prev
            : current
        )
      : null;

  return (
    <div className="container">
      <h1>🎓 Smart Student Management System</h1>

      <p className="welcome-text">
        Manage student records efficiently with search,
        grades, statistics and performance tracking.
      </p>

      <div className="stats">
        <div className="card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="card">
          <h3>Average Marks</h3>
          <p>{averageMarks}</p>
        </div>

        <div className="card">
          <h3>🏆 Top Scorer</h3>
          <p>
            {topScorer
              ? `${topScorer.name} (${topScorer.marks})`
              : "N/A"}
          </p>
        </div>
      </div>

      <StudentForm addStudent={addStudent} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <StudentTable
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />

      <footer className="footer">
        Developed by Varsha Thakur
      </footer>
    </div>
  );
}

export default App;