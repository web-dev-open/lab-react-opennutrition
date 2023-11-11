import foods from './foods.json'
import { Row, Divider, Button } from "antd";
import "./App.css";
import Search from './components/Search'
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";


function App() {
  
  const [list, setList] = useState(foods)


  function handleToggle(){
     
  }


  return (
    <div className="App">
      <AddFoodForm />
      <Button onclick={handleToggle}> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search/>

      <Divider>Food List</Divider>
      
        
      <Row style={{ width: "100%", justifyContent: "center" }} >
        {/* Render the list of Food Box components here */}
        <FoodBox  flist={list} />
        
        
      </Row>
    </div>
  );
}

export default App;
