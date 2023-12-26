// src/index.js
import 'antd/dist/antd.css';
import foods from './foods.json';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const [foodList, setFoodList] = useState(foods);

return (
  <div>
    {foodList.map(food => (
      <div key={food.name}>
        <p>{food.name}</p>
        <img src={food.image} width={100} alt={food.name} />
      </div>
    ))}
  </div>
);
// src/FoodBox.js
import { Card, Button } from 'antd';

const FoodBox = ({ food }) => {
  return (
    <Card title={food.name}>
      <img src={food.image} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <Button>Delete</Button>
    </Card>
  );
};

export default FoodBox;
import FoodBox from './FoodBox';

// Inside the App component
{foodList.map(food => (
  <FoodBox key={food.name} food={food} />
))}
// src/AddFoodForm.js
import { Input, Button } from 'antd';

const AddFoodForm = () => {
  // Implement form logic here

  return (
    <div>
      <Input placeholder="Name" />
      {/* Add other input fields */}
      <Button>Add Food</Button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
