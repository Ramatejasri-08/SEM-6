import React, { useState } from "react";

function Counter() {
  // Step 3: create state
  const [count, setCount] = useState(0);

  return (
    <div style={{marginTop: "20px"}}>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{marginLeft: "10px"}}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;