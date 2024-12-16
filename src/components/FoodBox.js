import React from 'react';
import { Card, Button } from 'antd';

function FoodBox({ food, deleteFood }) {
  return (
    <Card
      title={food.name}
      extra={<Button onClick={() => deleteFood(food.name)}>Delete</Button>}
      style={{ width: 240 }}
    >
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <img src={food.image} alt={food.name} width={100} />
    </Card>
  );
}

export default FoodBox;
