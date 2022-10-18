import React from 'react'
import { Card } from 'antd';

function FoodBox(props) {

    const {name, calories, image, servings} = props


  return (



    <div id='list'>
        <Card title={name} bordered={true} style={{ width: 300 }}>
        <h3>Calories: {calories}</h3>
        <h3>Servings: {servings}</h3>
        <img  src={image}  width={100} alt="passed food pic"  />
       
        
    </Card>
    </div>
  )
}

export default FoodBox