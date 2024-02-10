import React from 'react';
import { Card, Button } from 'antd';

const FoodBox = ({ food, onDelete }) => {
  const { name, calories, image, servings } = food;

  return (
    <Card
      title={name}
      extra={<Button type="danger" onClick={onDelete}>Delete</Button>}
      style={{ width: 300, margin: '16px' }}
    >
      <img src={image} alt={name} style={{ width: '100%' }} />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
    </Card>
  );
};

export default FoodBox;
