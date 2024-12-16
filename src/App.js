import React, { useState } from 'react';
import { Row, Col, Divider, Button } from 'antd'; 
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import foods from './foods.json';  
import 'antd/dist/reset.css';  

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchTerm, setSearchTerm] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const deleteFood = (foodName) => {
    setFoodList(foodList.filter(food => food.name !== foodName));
  };

  const filteredFoods = foodList.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Button onClick={() => setFormVisible(!formVisible)}>
        {formVisible ? 'Hide Form' : 'Add New Food'}
      </Button>

      {formVisible && <AddFoodForm addFood={addFood} />}
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Divider>Food List</Divider>  {/* Divider added here */}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.map(food => (
          <Col key={food.name} span={8}>
            <FoodBox food={food} deleteFood={deleteFood} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
