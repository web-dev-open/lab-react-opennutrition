import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food , deleteStuff}) {
  return (
    <Col  
    >
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 80 , color:'tomato' ,border: '2px solid tomato'  }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories : {food.calories}</p>
        <p>Servings : {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button danger  type="primary" onClick={deleteStuff}> Delete </Button>
      </Card> 
    </Col>
  );
}

export default FoodBox;
