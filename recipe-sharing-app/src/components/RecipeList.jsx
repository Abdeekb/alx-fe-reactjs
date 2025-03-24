import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  
  if (recipes.length === 0) {
    return (
      <div>
        <h2>Recipes</h2>
        <p>No recipes yet. Add your first recipe!</p>
        <Link to="/add">Add Recipe</Link>
      </div>
    );
  }
  
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link> | 
            <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link> | 
            <DeleteRecipeButton recipeId={recipe.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
