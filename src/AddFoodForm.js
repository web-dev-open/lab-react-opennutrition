import React, { useState } from 'react';
import { Input, Button } from 'antd';

function AddFoodForm({ addFoodToList }) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleSubmit = () => {
    addFoodToList(newFood);
    setNewFood({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <div style={{ marginBottom: '20px', width: '800px', padding: '20px', border: '2px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ marginBottom: '20px' }}>Add New Food</h2>
      <Input
        placeholder="Name"
        name="name"
        value={newFood.name}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Image URL"
        name="image"
        value={newFood.image}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Calories"
        name="calories"
        value={newFood.calories}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <Input
        placeholder="Servings"
        name="servings"
        value={newFood.servings}
        onChange={handleChange}
        style={{ marginBottom: '20px' }}
      />
      <Button type="primary" onClick={handleSubmit}>
        Add Food
      </Button>
    </div>
  );
}

export default AddFoodForm;