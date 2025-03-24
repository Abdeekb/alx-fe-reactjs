// src/store/recipeStore.js
import { create } from 'zustand';

// Create a store to manage recipes
const useRecipeStore = create((set) => ({
  // Initial state
  recipes: [],
  
  // Action to add a new recipe
  addRecipe: (newRecipe) => {
    const recipeWithId = { ...newRecipe, id: Date.now() };
    set((state) => ({ 
      recipes: [...state.recipes, recipeWithId] 
    }));
    return recipeWithId;
  },
  
  // Action to delete a recipe by id
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Action to update an existing recipe
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  // Action to set the entire recipes array
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
