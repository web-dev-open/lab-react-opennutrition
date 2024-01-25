import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';

function AddFoodForm({ onAddFood }) {
  const [foodData, setFoodData] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });
  //updating corresponding field in the 'foodData' state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validating  the form data if needed

    // Passing  the new food data to the parent component
    onAddFood(foodData);

    // Resetting the form fields
    setFoodData({
      name: '',
      image: '',
      calories: 0,
      servings: 0,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label="Name">
        <Input name="name" value={foodData.name} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Image">
        <Input name="image" value={foodData.image} onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Calories">
        <Input
          name="calories"
          type="number"
          value={foodData.calories}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Servings">
        <Input
          name="servings"
          type="number"
          value={foodData.servings}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Food
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddFoodForm;
