import React from "react";
import StudentProfile from "./StudentProfile";
import StudentList from "./StudentList";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React Assignment</h1>

      {/* Exercise 1 */}
      <StudentProfile />

      <hr />

      {/* Exercise 2 */}
      <StudentList />

      <hr />

      {/* Exercise 3 */}
      <Counter />
    </div>
  );
}

export default App;