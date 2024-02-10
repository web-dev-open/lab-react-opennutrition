import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import {Button, Row, Col, Alert } from 'antd';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const deleteFood = (index) => {
    const updatedList = [...foodList];
    updatedList.splice(index, 1);
    setFoodList(updatedList);
  };

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setShowAddForm(false);
  };

  return (
    <div className="App">
      <h1>Food List</h1>

      <Search value={searchTerm} onChange={setSearchTerm} />
      <Row gutter={[16, 16]}>
        {foodList
            .filter((food) =>
              food.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((food, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <FoodBox food={food} onDelete={() => deleteFood(index)} />
              </Col>
          ))}
      </Row>
      <Button onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      {showAddForm && <AddFoodForm onAdd={addFood} />}

      {(foodList.length === 0 || 
        (foodList.filter((food) =>
          food.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).length === 0)) && (
        <Alert
          message="No matching food items found. Please try a different search term or add some food."
          type="info"
          showIcon
          style={{ margin: '16px 200px 0px 200px' }}
        />
      )}

    </div>
  );
}

export default App;