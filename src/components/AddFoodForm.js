import React, { useState } from 'react';
import { Input, Button, Divider } from 'antd'; 
function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = () => {
    addFood({ name, image, calories, servings });
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form>
      <Divider>Add Food Entry</Divider>  {/* Divider added here */}
      
      <label>Name</label>
      <Input value={name} onChange={e => setName(e.target.value)} type="text" />

      <label>Image</label>
      <Input value={image} onChange={e => setImage(e.target.value)} type="text" />

      <label>Calories</label>
      <Input value={calories} onChange={e => setCalories(e.target.value)} type="number" />

      <label>Servings</label>
      <Input value={servings} onChange={e => setServings(e.target.value)} type="number" />

      <Button type="primary" onClick={handleSubmit}>Create</Button>
    </form>
  );
}

export default AddFoodForm;

