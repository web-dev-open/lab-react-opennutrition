import './App.css';
import { useState } from 'react';
import foodsJson from  './foods.json';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foods, setFood] = useState(foodsJson)

  const [filterFood, setFilterFood] = useState(foodsJson)

  function handleSearch(event){
    console.log(event.target.value)
    let searchText = event.target.value
    let newFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilterFood(newFood)
  }


  function handleAddForm(value){
    setFood([value, ...foods])
    setFilterFood([value, ...foods])
  }

  function handleDelete(index){
    let clonedFoods = structuredClone(foods)
    clonedFoods.splice(index, 1)
    setFood(clonedFoods)
    setFilterFood(clonedFoods)
  }
  


  return (
<>
    <div>
    <AddFoodForm handleAddForm={handleAddForm} />

    <Search handleSearch={handleSearch}/>
    
    </div>
    <div id='list'>
    
    {
      filterFood.map((food, index) => {
              return  <FoodBox  
		          name = {food.name}
		          calories= {food.calories}
		          image= {food.image}
		          servings = {food.servings}
              key = {`${index}${food.name}`}
              handleDelete = {handleDelete}
          />
              
            })
          }
          {
        !filterFood.length && (
          <h2>No Foods to show</h2>
        )
      }

    </div>
    </>
  );
}

export default App;
