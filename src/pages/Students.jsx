import { useState } from "react";
import StudentTable from "../components/StudentTable";
import SearchBar from "../components/SearchBar";

function Students({
  students,
  deleteStudent,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredStudents = students.filter(
    (student) => {
      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        String(student.rollNo)
          .toLowerCase()

      if (filter === "pass") {
        return (
          matchesSearch &&
          Number(student.marks) >= 40
        );
      }

      if (filter === "fail") {
        return (
          matchesSearch &&
          Number(student.marks) < 40
        );
      }

      return matchesSearch;
    }
  );

  return (
    <div>
      <h1 className="page-title">
        Student Records
      </h1>

      <p className="page-subtitle">
        Search, filter and manage students.
      </p>
<div className="search-container">
  <input
    type="text"
    placeholder="🔍 Search by Roll Number or Name"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

      <div className="filter-box">
        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option value="all">
            All Students
          </option>
          <option value="pass">
            Passed Students
          </option>
          <option value="fail">
            Failed Students
          </option>
        </select>
      </div>

      <StudentTable
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default Students;