import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    const duplicate = students.find(
      (s) => s.rollNo === student.rollNo
    );

    if (duplicate) {
      alert("Roll Number already exists!");
      return false;
    }

    setStudents((prev) => [...prev, student]);
    return true;
  };

  const deleteStudent = (rollNo) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      setStudents((prev) =>
        prev.filter(
          (student) => student.rollNo !== rollNo
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dashboard" />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard students={students} />}
          />

          <Route
            path="/students"
            element={
              <Students
                students={students}
                deleteStudent={deleteStudent}
              />
            }
          />

          <Route
            path="/add"
            element={
              <AddStudent
                addStudent={addStudent}
              />
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;