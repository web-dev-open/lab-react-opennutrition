import React from "react";
import { Card, Col, Button } from "antd";
// import 'antd/dist/reset.css';

const FoodBox = ({ food, onDelete }) => {
    const { id, name, image, calories, servings } = food;
  
    // Calling the onDelete function passed from the App component
    const handleDelete = () => {
      onDelete(food.id);
    };
  
    return (
      <Col>
        <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={image} height={60} alt={name} />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {calories * servings} kcal </b>
          </p>
          <Button type="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Card>
      </Col>
    );
  };

  export default FoodBox;
  