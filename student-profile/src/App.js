import React from "react";
import StudentProfile from "./StudentProfile";
import StudentList from "./StudentList";
import Counter from "./Counter";
import UserForm from "./UserForm";
import ItemList from "./ItemList";
import FetchData from "./FetchData";

function App() {
  return (
    <div>
      <h1>React Assignment</h1>

      <StudentProfile />
      <hr />

      <StudentList />
      <hr />

      <Counter />
      <hr />

      <UserForm />
      <hr />

      <ItemList />
      <hr />

      <FetchData />
    </div>
  );
}

export default App;