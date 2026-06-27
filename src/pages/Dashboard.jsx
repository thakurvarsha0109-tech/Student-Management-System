function Dashboard({ students }) {
  const totalStudents = students.length;

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
          Number(prev.marks) >
          Number(current.marks)
            ? prev
            : current
        )
      : null;

  const passStudents = students.filter(
    (student) => Number(student.marks) >= 40
  ).length;

  const failStudents = students.filter(
    (student) => Number(student.marks) < 40
  ).length;

  return (
    <div>
      <h1 className="page-title">
        🎓 Student Analytics Dashboard
      </h1>

      <p className="page-subtitle">
        Monitor student performance, academic progress,
        and classroom statistics.
      </p>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>👨‍🎓 Total Students</h3>
          <p>{totalStudents}</p>
        </div>

        <div className="dashboard-card">
          <h3>📊 Average Marks</h3>
          <p>{averageMarks}</p>
        </div>

        <div className="dashboard-card">
          <h3>🏆 Top Performer</h3>
         <p>
          {topScorer
           ? `${topScorer.name} (${topScorer.marks})`
          : "N/A"}
         </p>
        </div>

        <div className="dashboard-card">
          <h3>✅ Passed Students</h3>
          <p>{passStudents}</p>
        </div>

        <div className="dashboard-card">
          <h3>❌ Failed Students</h3>
          <p>{failStudents}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;