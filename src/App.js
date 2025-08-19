import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { Row } from "antd";

function App() {
  const [foodList, setFoodList] = useState(foods); // Current list
  const [allFoods, setAllFoods] = useState(foods); // Master list
  const [searchTerm, setSearchTerm] = useState(""); // Search text

  // Add new food
  const addFood = (newFood) => {
    setFoodList([newFood, ...foodList]);
    setAllFoods([newFood, ...allFoods]);
  };

  // Search foods
  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term === "") {
      setFoodList(allFoods);
    } else {
      const filteredFoods = allFoods.filter((food) =>
        food.name.toLowerCase().includes(term.toLowerCase())
      );
      setFoodList(filteredFoods);
    }
  };

  // Delete food
  const deleteFood = (foodName) => {
    const updatedFoods = foodList.filter((food) => food.name !== foodName);
    setFoodList(updatedFoods);

    const updatedAllFoods = allFoods.filter((food) => food.name !== foodName);
    setAllFoods(updatedAllFoods);
  };

  return (
    <div className="App">
      <h1>Food List</h1>

      {/* Add Food Form */}
      <AddFoodForm onAddFood={addFood} />

      {/* Search */}
      <Search searchTerm={searchTerm} onSearch={handleSearch} />

      {/* Food List */}
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodList.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={deleteFood} />
        ))}
      </Row>
    </div>
  );
}

export default App;
