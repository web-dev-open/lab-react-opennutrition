import "./App.css";

//Data
import foods from "./foods.json";

// Components
import FoodBox from "./FoodBox";

//Ant Design
import { Row } from "antd";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <section className="foods">
        <Row
        // gutter={{
        //   xs: 8,
        //   sm: 16,
        //   md: 24,
        //   lg: 32,
        // }}
        >
          {foods.map((food) => (
            <FoodBox key={food.name} food={food} />
          ))}
        </Row>
      </section>
    </div>
  );
}

export default App;
