import React from 'react';
import { Button } from 'antd';

const FoodBox = ({ food, onDelete }) => {
  const { name, calories, image, servings } = food;

  const handleDelete = () => {
    onDelete(food);
  };

  return (
    <div className="food-box">
      <div>
        <p>{name}</p>
        <img src={image} alt={name} style={{ width: '50px' }} />
      </div>
      <p>{calories} cal</p>
      <p>{servings} servings</p>
      <Button type="danger" onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default FoodBox;