import React, { useState } from 'react';
import Image2 from '../assets/pexels-suzyhazelwood-1126359.jpg';
import Image3 from '../assets/pexels-pixabay-236795.jpg';
import Image4 from '../assets/pexels-fotios-photos-109275.jpg';
import Image5 from '../assets/pexels-shameel-mukkath-3421394-5639251.jpg';

export default function Recipes() {
  const initialRecipes = [
    {
      id: 1,
      name: 'Blackberry Cake',
      category: 'Dessert',
      image: Image2,
      ingredients: ['¼ cup brown sugar', '2 tablespoons butter', '2 cups fresh blackberries', '¾ cup white sugar'],
      instructions: 'Mix all ingredients and bake at 350°F for 30 minutes.',
    },
    {
      id: 2,
      name: 'Mango Mocktail',
      category: 'Beverage',
      image: Image4,
      ingredients: ['1 ripe mango', '1 cup soda water', '1 tablespoon sugar', 'Ice cubes'],
      instructions: 'Blend mango and sugar, then add soda water and ice.',
    },
    {
      id: 3,
      name: 'English Breakfast',
      category: 'Breakfast',
      image: Image3,
      ingredients: ['Eggs', 'Sausage', 'Bacon', 'Toast'],
      instructions: 'Cook ingredients and serve with toast.',
    },
    {
      id: 4,
      name: 'Chicken Biryani',
      category: 'Main Course',
      image: Image5,
      ingredients: ['Chicken', 'Rice', 'Spices', 'Yogurt'],
      instructions: 'Cook rice and chicken with spices and yogurt.',
    },
  ];

  const [recipes, setRecipes] = useState(initialRecipes);
  const [searchTerm, setSearchTerm] = useState('');
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    category: '',
    ingredients: '',
    instructions: '',
    image: '',
  });

  // Search Function
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add Function
  const addRecipe = () => {
    const newRecipeData = {
      ...newRecipe,
      id: recipes.length + 1,
      ingredients: newRecipe.ingredients.split(','), // Assuming comma-separated ingredients
    };
    setRecipes([...recipes, newRecipeData]);
    setNewRecipe({ name: '', category: '', ingredients: '', instructions: '', image: '' }); // Reset form
  };

  // Delete Function
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  // Update Function (for simplicity, we'll assume updating only the name here)
  const updateRecipe = (id, updatedName) => {
    setRecipes(
      recipes.map(recipe =>
        recipe.id === id ? { ...recipe, name: updatedName } : recipe
      )
    );
  };

  return (
    <>
      <div className="flex justify-center ">
        <h1 className="text-green-500 font-bold ">Add your delicious recipe</h1>
      </div>
<br></br>
      {/* Search Function */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for a recipe"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered border-blue-500 p-2"
        />
      </div>

      {/* Recipe Cards */}
      <div className="flex flex-row flex-wrap justify-center gap-4 mt-4">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="card bg-base-100 w-96 shadow-xl pb-7">
            <figure className="px-10 pt-10">
              <img src={recipe.image} alt={recipe.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-blue-500 font-semibold">{recipe.category}</h2>
              <p className="text-green-500 font-mono">{recipe.name}</p>
              <p className="text-[white]">Ingredients:<br></br> {recipe.ingredients.join(', ')}</p>
              <p className="text-[white] font-sans">Instructions:<br></br> {recipe.instructions}</p>
              <div className="card-actions">
                <button className="btn btn-primary bg-blue-800 text-[white] px-6 mr-1 rounded">Edit</button>
                <button className="btn btn-danger bg-red-800 text-[white] px-6 ml-1 rounded" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-6">
  <h2 className="text-[white] text-2xl font-semibold text-center mb-4">Add New Recipe</h2>
  
  <input
    type="text"
    placeholder="Recipe Name"
    value={newRecipe.name}
    onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
    className="input input-bordered w-full mb-4 p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  
  <input
    type="text"
    placeholder="Category"
    value={newRecipe.category}
    onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
    className="input input-bordered w-full mb-4 p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  
  <input
    type="text"
    placeholder="Ingredients (comma-separated)"
    value={newRecipe.ingredients}
    onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
    className="input input-bordered w-full mb-4 p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  
  <input
    type="text"
    placeholder="Instructions"
    value={newRecipe.instructions}
    onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
    className="input input-bordered w-full mb-4 p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  
  <button
    className="btn bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
    onClick={addRecipe}
  >
    Add Recipe
  </button>
</div>
<br></br>
    </>
  );
}
