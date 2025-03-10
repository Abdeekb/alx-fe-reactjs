import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecipeStore } from "./store/recipeStore";  // Correct path
import RecipeDetails from './components/RecipeDetails';  // Ensure the correct path
import RecipeList from './components/RecipeList';  // Ensure the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} /> {/* Recipe details page */}
      </Routes>
    </Router>
  );
}

export default App;
