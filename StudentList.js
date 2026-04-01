import React from "react";
import StudentCard from "./StudentCard";

function StudentList() {
  return (
    <div>
      <h1>Student List</h1>

      <StudentCard name="Rama" department="CSE" marks="90" />
      <StudentCard name="Raju" department="ECE" marks="85" />
      <StudentCard name="Sita" department="IT" marks="95" />
    </div>
  );
}

export default StudentList;