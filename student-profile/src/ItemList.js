import React, { useState } from "react";

function ItemList() {
  // Step 3: Store list
  const [items, setItems] = useState([]);

  // Step 4: Store input
  const [input, setInput] = useState("");

  // Add item
  const addItem = () => {
    if (input === "") return;

    const newItem = {
      id: Date.now(), // unique id
      text: input
    };

    setItems([...items, newItem]);
    setInput("");
  };

  // Remove item
  const removeItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div style={{marginTop: "20px"}}>
      <h2>Item List</h2>

      {/* Input */}
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      {/* List */}
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text}
              <button
                onClick={() => removeItem(item.id)}
                style={{marginLeft: "10px"}}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;