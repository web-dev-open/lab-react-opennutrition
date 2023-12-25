import React from 'react';
import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  const { food, onDelete } = props;
  const { name, image, calories, servings } = food;

  const totalCalories = calories * servings;

  const handleDelete = () => {
    onDelete(food); 
  };

  return (
    <Col>
      <Card title={name} style={{ width: 240, height: 320, margin: 10, background: '#C1F2B0' }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories}</b> kcal
        </p>
        <Button style={{ margin: '5px' }} type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;