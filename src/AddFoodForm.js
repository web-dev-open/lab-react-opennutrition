import { useState } from 'react';
import { Divider, Input, Button } from 'antd';

function AddFoodForm(props) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled before adding the new food
    if (newFood.name && newFood.image && newFood.calories && newFood.servings) {
      // Call the onAddFood function passed from the parent component
      props.onAddFood(newFood);

      // Reset the form after submitting
      setNewFood({
        name: '',
        image: '',
        calories: '',
        servings: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={newFood.name}
        type="text"
        onChange={handleInputChange}
      />

      <label>Image</label>
      <Input
        name="image"
        value={newFood.image}
        type="text"
        onChange={handleInputChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={newFood.calories}
        type="number"
        onChange={handleInputChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={newFood.servings}
        type="number"
        onChange={handleInputChange}
      />

      <Button type="primary" htmlType="submit">
        Create
      </Button>
    </form>
  );
}

export default AddFoodForm;
