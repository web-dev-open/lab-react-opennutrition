import React from 'react';

import { Card, Col, Button } from 'antd';

// Iteration 2
const FoodBox = ({flist}) =>{

  return (
    flist.map((food)=>(
      <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 310, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories*food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
    ))

    
   

  );
}

export default FoodBox;