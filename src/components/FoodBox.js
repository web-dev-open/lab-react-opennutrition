import React from 'react'
import { Card, Button } from 'antd';

function FoodBox(props) {

    const {name, calories, image, servings, handleDelete, index} = props


  return (



    <div id='list'>
        <Card
         title={name} bordered={true} 
         style={{ 
          width: 300,
         margin: 10}}>
        <h3>Calories: {calories}</h3>
        <h3>Servings: {servings}</h3>
        <img  src={image}  width={100} alt="passed food pic"  />
       
        <Button onClick={() => { handleDelete(index)  }} type="primary">Delete</Button>
    </Card>
    </div>
  )
}

export default FoodBox