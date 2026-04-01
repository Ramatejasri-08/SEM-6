import React, { useState } from "react";

function UserForm() {
  // Step 3: Create state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  // Step 4: Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    // Validation
    if (name === "" || email === "" || password === "") {
      setError("All fields are required!");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter valid email!");
      return;
    }

    // If everything correct
    setError("");
    alert("Form Submitted Successfully!");

    // Reset form
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{marginTop: "20px"}}>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Show error */}
      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
}

export default UserForm;