import logo from './logo.svg';
import './App.css';
import jsonData from "./foods.json";
import { useState } from "react";
import "./App.css";
import FoodBox from "./Components/FoodBox";
import { Row, Divider } from "antd";
import AddFoodForm from "./Components/AddFoodForm";
import Search from "./Components/Search";

function App() {
  const [foods, setFoods] = useState(jsonData);

  function handleSearch(searchQuery) {
    const filterFoods = jsonData.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFoods(filterFoods);
  }

  const deleteFood = (calories)=>{
    const updatedFoods = foods.filter((food) => food.calories!== calories);
    setFoods(updatedFoods);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <AddFoodForm foods={foods} addNewFood={setFoods} />
      <Search handleSearch={handleSearch} />
      <Divider>
        <h1>Food List</h1>
      </Divider>
      {
      foods.length>0?
      (
      <Row gutter={[16, 16]}>
        {foods.map((food, index) => (
          <FoodBox key={index} food={food}  deleteFood={()=>deleteFood(food.calories)}  />
        ))}
      </Row>
      ):
      (
      <div style={{textAlign:'center'}}>
        <h1 >Oop! There is no more content to show</h1>
        <img src="https://imgs.search.brave.com/LlUypw3emuVXxVmVqVOAFfx3Dy8xf-U-3Ori5tAbsK4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvcHJvaGliaXRp/b24tc2lnbi1uby1z/aWduLXdvcmtzcGFj/ZS1iYWNrZ3JvdW5k/XzIzMTc4Ni03NTYz/LmpwZw" alt="" />
      </div>
      )   
    }
    </div>
  );
}

export default App;