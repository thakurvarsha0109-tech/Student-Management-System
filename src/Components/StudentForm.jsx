import { useState } from "react";

function StudentForm({ addStudent }) {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rollNo || !name || !marks) {
      setError("Please enter Roll Number, Student Name and Marks");
      return;
    }

    if (Number(marks) < 0 || Number(marks) > 100) {
      setError("Marks must be between 0 and 100");
      return;
    }

    const student = {
      rollNo,
      name,
      marks: Number(marks),
    };

    addStudent(student);

    setRollNo("");
    setName("");
    setMarks("");
    setError("");
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;