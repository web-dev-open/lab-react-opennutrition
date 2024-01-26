import logo from './logo.svg';
import './App.css';
import foodData from './foods.json';
import { useEffect, useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {

  const [foods, setFoods] = useState(foodData);
  const [searchString, setSearchString] = useState('');

  //iteration 2
  const food = {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
  }

  //to add food in the array on the click of the 'create' button in the Food form
  function addFood(food) {
    setFoods((prevFoods) => [food, ...prevFoods]);
  }

  //to update the search string and filter the array
  function onSearchChange(newSearchString) {
    setSearchString(newSearchString);
  }

  let filteredFoods = foods.filter((food) => {
    return food.name.toLowerCase().startsWith(searchString.toLowerCase());
  });

  //to delete a food card on the click of the respective delete button
  function deleteFood(foodToBeDeleted) {
    console.log('delete food...');
    setFoods((prevFoods) => {
      return prevFoods.filter((food) => foodToBeDeleted !== food);
    })
  }

  return (
    <div className="App">
      <div className='foodFormAndSearchBarContainer'>
        <AddFoodForm addFood={addFood} />
        <SearchBar onSearchChange={onSearchChange} />
      </div>
      <div className='foodBoxes'>
        {filteredFoods.length === 0 ? (
          <div>
            <img src="https://static.thenounproject.com/png/523558-200.png" />
            <p>No content to show!</p>
          </div>
        ) : (
          filteredFoods.map((food) => (
            <FoodBox food={food} deleteFood={deleteFood} />
          )))}
      </div>
    </div>
  );
}

export default App;
