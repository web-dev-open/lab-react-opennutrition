// src/components/AddFoodForm.js

import React, { useState } from 'react';
import { Input, Button } from 'antd';

const AddFoodForm = ({ onAdd }) => {
  const [food, setFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFood({
      ...food,
      [name]: value
    });
  };

  const handleSubmit = () => {
    onAdd(food);
    setFood({
      name: '',
      image: '',
      calories: '',
      servings: ''
    });
  };

  return (
    <div style={{display: "grid", gap: "10px", margin: "0px 100px 0px 100px" }}>
      <h2>Add New Food</h2>
      <Input
        placeholder="Name"
        name="name"
        value={food.name}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Image URL"
        name="image"
        value={food.image}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Calories"
        name="calories"
        value={food.calories}
        onChange={handleInputChange}
      />
      <Input
        placeholder="Servings"
        name="servings"
        value={food.servings}
        onChange={handleInputChange}
      />
      <Button type="primary" onClick={handleSubmit}>
        Add Food
      </Button>
    </div>
  );
};

export default AddFoodForm;
