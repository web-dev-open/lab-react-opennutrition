// AddFoodForm.js
import React, { useState } from 'react';
import { Input, Button } from 'antd'; 
//import 'antd/dist/antd.css';

const AddFoodForm = ({ onAddFood }) => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(formData);
    // Clear form fields after submission
    setFormData({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={formData.name}
        onChange={(e) => handleChange(e, 'name')}
        placeholder="Name"
      />
      <Input
        value={formData.image}
        onChange={(e) => handleChange(e, 'image')}
        placeholder="Image URL"
      />
      <Input
        value={formData.calories}
        onChange={(e) => handleChange(e, 'calories')}
        type="number"
        placeholder="Calories"
      />
      <Input
        value={formData.servings}
        onChange={(e) => handleChange(e, 'servings')}
        type="number"
        placeholder="Servings"
      />
      <Button type="primary" htmlType="submit">
        Add Food
      </Button>
    </form>
  );
};

export default AddFoodForm;
