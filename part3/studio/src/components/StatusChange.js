import { useState } from "react";

export default function StatusChange() {
  const [notes, setNotes] = useState("");
  const [recipeStatus, setRecipeStatus] = useState(false);
  const handleChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipeStatus(true);
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Have you tried this recipe? Add your notes here:{" "}
          <input type="text" value={notes} onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
      <p>{notes.value}</p>
      {!recipeStatus ? (
        <p>My Recipe Notes aren't here!</p>
      ) : (
        <p>{notes}</p>
      )}
    </div>
  );
}
