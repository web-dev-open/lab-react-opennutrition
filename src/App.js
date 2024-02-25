
import './App.css';
import React, { useState } from 'react';

import foods from  './foods.json';
import { Card, Row, Col, Divider, Input, Button } from  'antd';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';


function App() {
  const [food, setFoods] = useState(foods);
  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const handleSearch = (query) => {
    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  return (
    <div>
      <Search onSearch={handleSearch} /> 
      <AddFoodForm onAddFood={handleAddFood}/>
      <h1>Food List</h1>
      {foods.map((food, index) => (
       <FoodBox key={index} food={food} />
        
      ))}
      
    </div>

  
   

  );
      }
    
 
  


export default App;
