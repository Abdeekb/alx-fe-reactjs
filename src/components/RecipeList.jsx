// src/components/RecipeList.jsx

import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const addRecipe = useRecipeStore(state => state.addRecipe);

  // Adding some sample recipes
  useEffect(() => {
    addRecipe({ id: 1, title: 'Spaghetti Bolognese', description: 'A classic Italian dish.' });
    addRecipe({ id: 2, title: 'Chicken Curry', description: 'A spicy and flavorful dish.' });
  }, [addRecipe]);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
