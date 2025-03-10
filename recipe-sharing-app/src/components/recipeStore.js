import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
  setRecipes: (recipes) => set({ recipes }), // إضافة دالة setRecipes
}));

export default useRecipeStore;
