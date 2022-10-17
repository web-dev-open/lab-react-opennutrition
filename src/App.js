import logo from "./logo.svg";
import "./App.css";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  return (
    <>
      <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      />
    </>
  );
}

export default App;
