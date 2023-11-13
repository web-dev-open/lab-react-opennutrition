import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components.js/FoodBox';
import AddFoodForm from './components.js/AddFoodForm';
import Search from './components.js/Search';
import { Button, Divider } from 'antd';
import EmptyPage from './components.js/EmptyPage';
function App() {
  const [foodss, setFoods] = useState(foods);
  const [filter, setFilter] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const listfood = foodss.map((f) => (
    <li key={f.name}>
      <FoodBox food={f} deleteStuff={() => deleteFood(f)} />
    </li>
  ));

  const deleteFood = (foodToDelete) => {
    const updatedFoods = foodss.filter((f) => f !== foodToDelete);
    setFoods(updatedFoods);
    
  };

  const doSomething = (newFood) => {
    setFoods([...foodss, newFood]);
    
  };

  const applyFilter = (value, foodsToFilter) => {
    setFilter(value);
    if (value.trim() === '') {
      setFoods(foods);
    } else {
      setFoods(
        foodsToFilter.filter((g) =>
          g.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const doSomethingElse = (event) => {
    const value = event.target.value;
    applyFilter(value, foodss);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <Button type="primary" onClick={toggleForm}>
        {isFormVisible ? 'Hide Form' : 'Add New Food'}
      </Button>
      {isFormVisible && (
        <div className='fomoss'>
          <AddFoodForm handleSubmit={doSomething} />
        </div>
      )}

      <Search value={filter} handleSubmit={doSomethingElse} />
      <Divider>Food List</Divider>
      {foodss.length === 0 && <EmptyPage />}
      <ul className="food-list">{listfood}</ul>
    </div>
  );
}

export default App;
