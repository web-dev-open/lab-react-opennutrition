import { Card, Col, Button } from "antd";

function FoodBox({ food }) {
  const { name, image, calories, servings } = food;
  return (
    <Col xs={12} md={8} lg={6}>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image || ""} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
