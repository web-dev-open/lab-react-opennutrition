import { Card, Col, Button } from "antd";

function FoodBox({ food, deleteFood }) {
  const { name, image, calories, servings } = food;

  function handleDelete() {
    console.log(name);
    deleteFood((prev) => {
      const filteredFoods = prev.foods.filter((food) => food.name !== name);
      return {
        ...prev,
        foods: filteredFoods,
        filteredFoods: filteredFoods,
      };
    });
  }
  return (
    <Col xs={12} md={8} lg={6}>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image || ""} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={handleDelete} style={{ marginTop: 10 }}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
