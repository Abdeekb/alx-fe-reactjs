// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  // Find the recipe by id
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === parseInt(id) || recipe.id === id)
  );
  
  // State for form fields
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: ''
  });
  
  // Load recipe data into form when component mounts
  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || '',
        description: recipe.description || '',
        ingredients: recipe.ingredients ? recipe.ingredients.join('\n') : '',
        instructions: recipe.instructions || ''
      });
    }
  }, [recipe]);
  
  // If recipe doesn't exist, show a message
  if (!recipe) {
    return (
      <div className="edit-recipe-form">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're trying to edit does not exist.</p>
        <Link to="/" className="back-btn">Back to Recipes</Link>
      </div>
    );
  }
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format ingredients as an array
    const updatedRecipe = {
      ...formData,
      ingredients: formData.ingredients
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '')
    };
    
    // Update the recipe in the store
    updateRecipe(recipe.id, updatedRecipe);
    
    // Navigate to the recipe details page
    navigate(`/recipes/${recipe.id}`);
  };
  
  return (
    <div className="edit-recipe-form">
      <h2>Edit Recipe</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients (one per line):</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="5"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="5"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-btn">Save Changes</button>
          <Link to={`/recipes/${recipe.id}`} className="cancel-btn">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;
