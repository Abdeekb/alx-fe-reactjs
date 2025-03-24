// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import useRecipeStore from './store/recipeStore';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Initialize with some sample recipes when the app loads
  useEffect(() => {
    const sampleRecipes = [
      {
        id: 1,
        title: 'Chocolate Chip Cookies',
        description: 'Classic chocolate chip cookies with a soft center and crispy edges.',
        ingredients: ['2 cups all-purpose flour', '1/2 tsp baking soda', '1/2 tsp salt', '3/4 cup unsalted butter', '1 cup brown sugar', '1/2 cup white sugar', '2 eggs', '2 tsp vanilla extract', '2 cups chocolate chips'],
        instructions: 'Preheat oven to 375°F. Mix dry ingredients, cream butter and sugars, add eggs and vanilla, combine with dry ingredients, fold in chocolate chips. Bake for 9-11 minutes.'
      },
      {
        id: 2,
        title: 'Spaghetti Carbonara',
        description: 'Traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
        ingredients: ['1 pound spaghetti', '8 ounces pancetta or bacon', '4 large eggs', '1 cup grated Pecorino Romano', '1 cup grated Parmesan', 'Freshly ground black pepper', 'Salt'],
        instructions: 'Cook pasta al dente. Meanwhile, crisp pancetta in a pan, beat eggs with cheese in a bowl. Drain pasta, add to pancetta, remove from heat, quickly stir in egg mixture, season with pepper and salt if needed.'
      }
    ];
    
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div className="app">
      <header className="app-header">
        <h1><Link to="/">Recipe Sharing App</Link></h1>
        <nav className="app-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link">Add Recipe</Link>
        </nav>
      </header>
      
      <main className="app-main">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2025 Recipe Sharing App</p>
      </footer>
    </div>
  );
}

export default App;
