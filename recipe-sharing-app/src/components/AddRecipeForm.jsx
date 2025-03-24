import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  const addRecipe = useRecipeStore(state => state.addRecipe);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process ingredients into an array
    const ingredientsList = ingredients
      .split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');
    
    // Add the recipe
    const newRecipe = addRecipe({
      title,
      description,
      ingredients: ingredientsList,
      instructions
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setIngredients('');
    setInstructions('');
    
    // Navigate to recipe list
    navigate('/');
  };
  
  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        
        <div>
          <label>Ingredients (one per line):</label>
          <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
          />
        </div>
        
        <div>
          <label>Instructions:</label>
          <textarea 
            value={instructions} 
            onChange={(e) => setInstructions(e.target.value)} 
          />
        </div>
        
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
