import React, { useState } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './SearchBar'; // Make sure your Search component is implemented correctly
import foods from './foods.json';
import { Row, Button, Empty } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(foods);
  const [formVisible, setFormVisible] = useState(true);

  const addFood = (newFood) => {
    // newfood? valid before adding it to the list
    console.log("Adding food:", newFood); // Check what is being added

    if (newFood.name && newFood.image && newFood.calories && newFood.servings) {
      const updatedFoodList = [...foodList, newFood];
      setFoodList(updatedFoodList);
      setFilteredFood(updatedFoodList); 
    } else {
      alert('Please fill all fields before adding food.'); 
    }
  };

  const filterFood = (searchTerm) => {
    const filtered = foodList.filter((food) => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFood(filtered);
  };

  const deleteFood = (foodName) => {
    const updatedFoodList = foodList.filter((food) => food.name !== foodName);
    setFoodList(updatedFoodList);
    setFilteredFood(updatedFoodList); 
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="App">
      <Button className='btn' type='button' onClick={toggleFormVisibility}>
        {formVisible ? 'Hide Form' : 'Add New Food'}
      </Button>
      {formVisible && <AddFoodForm addFood={addFood} />}
      <Search filterFood={filterFood} />
      {filteredFood.length === 0 ? (
        <Empty description="No foods available" />
      ) : (
        <Row className='row-searched-food'>
          {filteredFood.map((food) => (
            <FoodBox food={food} deleteFood={deleteFood} key={food.name} />
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
