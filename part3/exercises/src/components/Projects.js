import { useState } from "react";
import data from "../data.json";

export default function MyProjects() {
  const [index, setIndex] = useState(0);
  const discImages = data.discImages;
  const discImage = discImages[index];

  function handleClick() {
    if (index < discImages.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <div>
        <ol>
          <li>{discImage.disc}</li>
          <li>{discImage.designer}</li>
        </ol>
        <img
          src={discImage.photoUrl}
          alt={discImage.alt}
          width="500px"
          height="500px"
        />
      </div>
    </div>
  );
}
