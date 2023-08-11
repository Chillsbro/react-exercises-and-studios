import { useState } from "react";

export default function BoardAssignment() {
  const boards = [
    { id: 1, label: "Cultural Foods", value: "Japanese Dish" },
    { id: 2, label: "Health Foods", value: "High Protein" },
    { id: 2, label: "Fancy Foods", value: "Sushi at home" },
  ];

  const [boardName, setName] = useState("no boards yet!");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
        {boards.map((board) => {
          return <option value={board.value}>{board.label}</option>;
        })}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
