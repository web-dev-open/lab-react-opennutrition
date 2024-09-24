import React from 'react'
import { Button, Col, Card } from 'antd';


export default function FoodBox({food, deleteFood}) {
    return (
    <>
            <Col span={6} key={food.name} className='col-foodbox'>
              <Card
                    className="food-card flex-foodcard" 
                style={{ width: 230, height: 300, margin: 10 }}
                >
                    <p style={{ fontWeight: "bolder", fontSize: "1"  }}
                    >{food.name.toUpperCase()}</p>
                <img src={food.image} height={70} alt={food.name} />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                  <b>Total Calories: {food.calories * food.servings}</b> kcal
                </p>
                <Button className='btn' type='submit' onClick={() => deleteFood(food.name)}>Delete</Button>
                </Card>
            </Col>
            </>
  )
}
