import styles from './Description.module.css';
export default function RecipePhoto() {
  return(
  <img
    src="https://www.fifteenspatulas.com/wp-content/uploads/2016/06/Homemade-Sushi-1-640x427.jpg"
    alt="picture of sushi roll with salmon, cream cheese and avocado"
    height="500px"
    width="500px"
    className={styles.imageUpdates}
  />
  );
}
