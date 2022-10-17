import logo from "./logo.svg";
import "./App.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";

function App() {
  return (
    <div className="App">
      <h1 className=" mt-10 font-bold text-lg">Food List</h1>
      {/* <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row> */}
      {foods.map((foodItem, index) => {
        return (
          <>
            <Row>
              <Col span={24}>
              <div className="flex-col self-start p-5">
              <p className=" text-lg font-semibold flex self-start"> {foodItem.name} </p>
              <img src={foodItem.image} width={120} />
            </div>
              </Col>
            </Row>
      
          </>
        );
      })}
      <div></div>
    </div>
  );
}

export default App;
