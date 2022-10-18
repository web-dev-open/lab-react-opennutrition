import logo from "./logo.svg";
import "./App.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  return (
    <>
      <h1 className=" text-xl font-bold text-center py-5">Food List</h1>
      <div className="container-fluid">
        <div className="block featureBlock bgGray">
          <Row gutter={[16, 16]}>
            {foods.map((data, i) => {
              return (
                <FoodBox
                  food={{
                    name: `${data.name}`,
                    calories: `${data.calories}`,
                    image: `${data.image}`,
                    servings: `${data.servings}`,
                  }}
                />
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}

export default App;
