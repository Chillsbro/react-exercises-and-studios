const RecipeAuthor = () => {
  let authorLink = "https://www.fifteenspatulas.com/homemade-sushi/";
  let authorPhoto =
    "https://www.fifteenspatulas.com/wp-content/uploads/2018/06/Joanne-Ozug-Fifteen-Spatulas-2018.jpg";
  let authorName = "Joanne";

  return (
    <div>
      <img
        src={authorPhoto}
        alt="Joanne's Photo"
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    "Seaweed",
    "Jasmine Rice",
    "Salmon",
    "Avocado",
    "Cream Cheese",
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Homemade Sushi</h1>
        <p>
          Homemade Sushi is so much cheaper than at the restaurant. Plus, it’s
          easy and fun to make your own rolls at home, so you can put all your
          favorite ingredients into your perfect custom roll — here’s how!
        </p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return <img src="" alt="" className="imageUpdates" />;
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
