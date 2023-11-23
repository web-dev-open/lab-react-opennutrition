import { Card, Col, Button } from 'antd';

function FoodBox({ food, onDelete }) {
  const handleDelete = () => {
    // Call the onDelete function with the food name when the delete button is clicked
    onDelete(food.name);
  };

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 250, height: 320, margin: 20 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} kcal</b>
        </p>
        <Button type="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
