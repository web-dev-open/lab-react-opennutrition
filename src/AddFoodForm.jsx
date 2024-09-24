import React, { useState } from 'react';
import { Input, Button, Col, Card } from 'antd';

export default function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent reload after submitting
    if (name && image && calories && servings) { //checking if everythin is in
  // obj with data collected
  const newFood = { 
    name, 
    image, 
    calories: Number(calories), 
    servings: Number(servings) 
};

// passing the new food object
addFood(newFood); 
//clear after submission
      setName('');
      setImage('');
      setCalories('');
      setServings('');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <Col span={6}>
      <Card className='food-card addFoodButton'>
        <form className='form-add-food' >
          <Input value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <Input value={image} placeholder="Image URL" onChange={(e) => setImage(e.target.value)} />
          <Input value={calories} type="number" placeholder="Calories" onChange={(e) => setCalories(e.target.value)} />
                  <Input value={servings} type="number" placeholder="Servings" onChange={(e) => setServings(e.target.value)} />
                  
          <Button onClick={handleSubmit} className='btn' type="submit">Add Food</Button>
        </form>
      </Card>
    </Col>
  );
}
