import "./App.css";

//Data
import foods from "./foods.json";

// Components
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";

//Ant Design
import { Row, Divider, Button } from "antd";

// React
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    foods: foods,
    filteredFoods: foods,
    addNewFood: false,
  });
  return (
    <div className="App">
      <h1>Food Tracker</h1>
      <Divider>Add Food Entry</Divider>
      {state.addNewFood ? (
        <>
          <AddFoodForm addFood={setState} />
          <Button
            style={{ marginTop: 10 }}
            type="primary"
            onClick={() => setState({ ...state, addNewFood: false })}
          >
            Hide Form
          </Button>
        </>
      ) : (
        <Button
          style={{ marginTop: 10 }}
          type="primary"
          onClick={() => setState({ ...state, addNewFood: true })}
        >
          Add New Food
        </Button>
      )}
      <Divider>Search</Divider>
      <SearchBar updateFilteredFoods={setState} />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Divider>Food List</Divider>
        {state.filteredFoods.map((food) => (
          <FoodBox key={food.name} food={food} deleteFood={setState} />
        ))}
      </Row>
      {state.foods.length === 0 && <p>No foods to display</p>}
    </div>
  );
}

export default App;
