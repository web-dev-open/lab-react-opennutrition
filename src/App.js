import React, { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foodsData from './components/foods.json';

function App() {
  const [foods, setFoods] = useState(foodsData);

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const handleSearch = (searchTerm) => {
    const filteredFoods = foodsData.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  const handleDelete = (food) => {
    const updatedFoods = foods.filter(item => item.id !== food.id);
    setFoods(updatedFoods);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      <Search onSearch={handleSearch} />
      {foods.map((food, index) => (
        <FoodBox key={index} food={food} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;