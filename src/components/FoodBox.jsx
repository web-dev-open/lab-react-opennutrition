import React from "react";
import { Card, Col, Row, Button } from "antd";

const FoodBox = ({ food }) => {
  return (
    // <div className="block featureBlock bgGray">
      
        
          <Col span={8}>
            <Card
              title={food.name}
              style={{ width: 200, height: 350, margin: 10 }}
            >
              <img src={food.image} height={40} alt="food" />
              <p>Calories: {food.calories}</p>
              <p>Servings: {food.servings}</p>
              <p>
                <b>
                  Total Calories: {food.calories} * {food.servings}{" "}
                </b>{" "}
                kcal
              </p>
              <Button type="primary"> Delete </Button>
            </Card>
          </Col>
        
      // </div>
    // </div>

    // <Row style={{ width: "100%", justifyContent: "center" }}>

    //     <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
    //       <img src={food.image} height={60} alt="food" />
    //       <p>Calories: {food.calories}</p>
    //       <p>Servings: {food.servings}</p>
    //       <p>
    //         <b>
    //           Total Calories: {food.calories} * {food.servings}{" "}
    //         </b>{" "}
    //         kcal
    //       </p>
    //       <Button type="primary"> Delete </Button>
    //     </Card>

    // </Row>
  );
};
export default FoodBox;
