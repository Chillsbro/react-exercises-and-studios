import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink = "https://www.fifteenspatulas.com/homemade-sushi/";
  let authorPhoto =
    "https://www.fifteenspatulas.com/wp-content/uploads/2018/06/Joanne-Ozug-Fifteen-Spatulas-2018.jpg";
  let authorName = "Joanne";
  return (
    <div>
      <img
        src={authorPhoto}
        alt="Asian woman with black hair"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Homeade Sushi</a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Homeade Sushi</h1>
          <p>Salmon, Cream Cheese and Avocado</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
