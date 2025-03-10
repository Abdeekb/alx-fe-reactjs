import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecipeStore } from "./components/recipeStore";  // Correct the path
import RecipeDetails from './components/RecipeDetails'; // Ensure the correct path
import RecipeList from './components/RecipeList'; // Add path for RecipeList component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />  {/* Recipe list page */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />  {/* Recipe details page */}
      </Routes>
    </Router>
  );
}

export default App;
