import React from 'react';
import { Col, Card, Button } from 'antd'; // Assuming you're using Ant Design components
import "./FoodBox.css"



function FoodBox(props) {
  const { name, calories, image, servings } = props.food;

  return (
    <div className='food-section'>
      <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings}</b> kcal
        </p>
        <Button type="primary">Delete</Button>
      </Card>
    </Col>

    </div>
   
  );
}

export default FoodBox;
