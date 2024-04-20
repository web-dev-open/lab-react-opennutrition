import React, { useState } from 'react';
import { Input, Button } from 'antd';

const AddFoodForm = ({ onAddFood }) => {
  const [food, setFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(food);
    setFood({
      name: '',
      image: '',
      calories: '',
      servings: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          placeholder="Name"
          name="name"
          value={food.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          placeholder="Image URL"
          name="image"
          value={food.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          placeholder="Calories"
          name="calories"
          value={food.calories}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          placeholder="Servings"
          name="servings"
          value={food.servings}
          onChange={handleChange}
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit">
          Add Food
        </Button>
      </div>
    </form>
  );
};

export default AddFoodForm;