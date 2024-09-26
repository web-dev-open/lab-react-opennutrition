import { Card, Button, Col } from "antd";

const FoodBox = ({ food , deleteFood }) => {


  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        style={{ margin: 30 }}
        title={food.name}
        cover={
          <img
            alt={food.name}
            src={food.image}
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
        }
      >
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories} Kcal</b>
        </p>
        <Button
          onClick={deleteFood}
          type="primary"
          style={{ background: "#1890ff", borderColor: "#1890ff" }}
        >
          Delete
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
