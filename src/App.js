import "./App.css";
import "antd/dist/reset.css";

import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { Row, Col } from "antd";

function App() {
  const [foodList, setFoodList] = useState(foods);

  // Function to add a new food item to the list
  const handleAddFood = (newFood) => {
    // Adding the new food to the list
    setFoodList((prevFoodList) => [...prevFoodList, newFood]);
  };

  // Function to filter the food list based on the search query
  const handleSearch = (query) => {
    const filteredList = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    // Updating the food list to be displayed
    setFoodList(filteredList);
  };

  // Function to handle the delete function
  const handleDeleteFood = (foodId) => {
    // Removing the selected food item from the list
    const updatedFoodList = foodList.filter((food) => food.id !== foodId);
    setFoodList(updatedFoodList);
  };

  return (
    <div className="App">
      <main>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Search onSearch={handleSearch} />
          </Col>
          <Col span={12}>
            <AddFoodForm onAddFood={handleAddFood} />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          {foodList.map((food) => (
            <Col key={food.id} span={8}>
            <FoodBox food={food} onDelete={handleDeleteFood} />

            </Col>
          ))}
        </Row>
      </main>
    </div>
  );
}

export default App;
