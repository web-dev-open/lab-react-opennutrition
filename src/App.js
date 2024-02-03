// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Row, Divider, Button} from 'antd';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';
import foods from './foods.json';

function App() {
  const [foodData, setFoodData] = useState(foods.map((food) => ({ ...food, id: food.name })));
  const [filteredFoodData, setFilteredFoodData] = useState(foodData);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddFood = (newFood) => {
    // Use food name as id
    const foodWithId = { ...newFood, id: newFood.name };

    setFoodData([foodWithId, ...foodData]);
    setFilteredFoodData([foodWithId, ...filteredFoodData]);
  };

  const handleDeleteFood = (id) => {
    const updatedFoodData = foodData.filter((food) => food.id !== id);
    setFoodData(updatedFoodData);
    setFilteredFoodData(updatedFoodData);
  };

  const handleSearch = (query) => {
    const filteredData = foodData.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoodData(filteredData);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <div className="App">
  
      <Divider>
        <h2>Food List</h2>
      </Divider>

      {/* Display AddFoodForm if showAddForm is true */}
      {showAddForm && <AddFoodForm onAddFood={handleAddFood} />}

      {/* Toggle display of AddFoodForm */}
      <Button type="default" onClick={toggleAddForm}>
        {showAddForm ? 'Hide Form' : 'Add New Food'}
      </Button>

      {/* Display Search component */}
      <Search onSearch={handleSearch} searchQuery={filteredFoodData} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center'}}>
        {/* Render the list of Food Box components */}
        {foodData.length === 0 ? (
          <div className="feedback">
            <h3>Oops! There is no more content to show.</h3>
            <span>Ø</span>
          </div>
        ) : (
          foodData.map((food) => (
            <FoodBox key={food.name} food={food} onDelete={handleDeleteFood} />
          ))
        )}
      </Row>
    </div>
  );
}
export default App;