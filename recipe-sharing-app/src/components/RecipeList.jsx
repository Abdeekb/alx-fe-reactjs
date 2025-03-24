// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  // Access recipes from the store
  const recipes = useRecipeStore((state) => state.recipes);

  // If there are no recipes, show a message
  if (recipes.length === 0) {
    return (
      <div className="recipe-list">
        <h2>Recipes</h2>
        <p>No recipes yet. Add your first recipe!</p>
        <Link to="/add" className="add-recipe-link">Add Your First Recipe</Link>
      </div>
    );
  }

  // Render the list of recipes
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p className="recipe-description">
              {recipe.description.substring(0, 100)}
              {recipe.description.length > 100 ? '...' : ''}
            </p>
            <div className="recipe-actions">
              <Link to={`/recipes/${recipe.id}`} className="view-recipe-btn">
                View Details
              </Link>
              <Link to={`/recipes/${recipe.id}/edit`} className="edit-recipe-btn">
                Edit
              </Link>
              <DeleteRecipeButton recipeId={recipe.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
