import { useState } from "react";

function StudentForm({ addStudent }) {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rollNo.trim() || !name.trim() || !marks) {
      setError(
        "Please enter Roll Number, Student Name and Marks"
      );
      return;
    }

    if (rollNo.trim().length < 3) {
      setError(
        "Roll Number must be at least 3 characters"
      );
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(name.trim())) {
      setError(
        "Student Name should contain only alphabets"
      );
      return;
    }

    if (
      Number(marks) < 0 ||
      Number(marks) > 100
    ) {
      setError(
        "Marks must be between 0 and 100"
      );
      return;
    }

    const student = {
      rollNo: rollNo.trim(),
      name: name.trim(),
      marks: Number(marks),
    };

    const added = addStudent(student);

    if (added !== false) {
      setRollNo("");
      setName("");
      setMarks("");
      setError("");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>

      {error && (
        <p className="error">{error}</p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) =>
            setRollNo(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => {
            const value = e.target.value;

            if (
              /^[A-Za-z\s]*$/.test(value)
            ) {
              setName(value);
            }
          }}
        />

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          min="0"
          max="100"
          onChange={(e) => {
            const value = e.target.value;

            if (
              value === "" ||
              (Number(value) >= 0 &&
                Number(value) <= 100)
            ) {
              setMarks(value);
            }
          }}
        />

        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;