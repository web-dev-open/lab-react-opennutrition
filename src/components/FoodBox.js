import React from 'react';
import { Col, Card, Button } from 'antd';

export default function FoodBox(props) {

    function handleDeleteClick() {
        console.log('Handle delete click...');
       props.deleteFood(props.food);
    }

    return (
        <Col>
            <Card
                title={props.food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >   <img src={props.food.image} height={60} alt={props.food.name} />
                    <p>Calories: {props.food.calories}</p>
                    <p>Servings: {props.food.servings}</p>
                    <p>
                        <b>Total Calories: {props.food.calories} * {props.food.servings}</b> kcal
                    </p>
                    <Button type="primary" onClick={handleDeleteClick}> Delete </Button>
            </Card>
        </Col>
    )
}
