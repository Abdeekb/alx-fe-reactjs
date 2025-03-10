import { useRecipeStore } from "../store/recipeStore";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom to navigate

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>  {/* Link to recipe details page */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
