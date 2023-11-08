import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components.js/FoodBox';
import AddFoodForm from './components.js/AddFoodForm';
import Search from './components.js/Search';

function App() {
  const [foodss, setFoods] = useState(foods);
  const [filter, setFilter] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const listfood = foodss.map((f) => (
    <li key={f.name}>
      <FoodBox food={f} deleteStuff={() => deleteFood(f)} />
    </li>
  ));

  const deleteFood = (foodToDelete) => {
    const updatedFoods = foodss.filter((f) => f !== foodToDelete);
    setFoods(updatedFoods);
  };

  const doSomething = (e) => {
    setFoods([...foodss, e]);
  };

  function setFilterPromise(value) {
    return new Promise((resolve) => {
      setFilter(value);
      resolve(value);
    });
  }

  function doSomethingElse(event) {
    setFilterPromise(event.target.value)
      .then((value) => {
        setFoods(
          foods.filter((g) =>
            g.name.toLowerCase().includes(value.toLowerCase())
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <h1>Add Food List</h1>
      <button onClick={toggleForm}>
        {isFormVisible ? 'Hide Form' : 'Add New Food'}
      </button>
      {isFormVisible && <AddFoodForm handleSubmit={doSomething} />}
      <h1>Search</h1>
      <Search value={filter} handleSubmit={doSomethingElse} />
      <h1>Food List</h1>
      <ul className="food-list">{listfood}</ul>
    </div>
  );
}

export default App;
