import logo from './logo.svg';
import './App.css';

import  'antd/dist/antd.css';

import foods from  './foods.json';
import React from 'react';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import {Input ,Button} from 'antd'

  
function App() {

  const [list,setList]=React.useState(foods)
  const [newItem,setItem]=React.useState({})
  function createItem(f,i)
  {
    console.log('passing',i)
      return <FoodBox
        key={i}
        food={f} 
        onDel={ () => deleteItem(i) }
      />
  }
  function deleteItem(i)
  {
    let copy=[...list]
    copy.splice(i,1)
    setList(copy)
  }
  function newFood(e)
  {
    setItem({name : e.target.value})
  }
  function newUrl(e)
  {
    setItem({ ...newItem , image : e.target.value})
  }
  function newCalo(e)
  {
    setItem({ ...newItem , calories : parseInt(e.target.value)})
  }
  function newServes(e)
  {
    setItem({ ...newItem , servings : parseInt(e.target.value)})
  }
  function addFood()
  {
    setList([newItem , ...list ])
  }
  function filter(text)
  {
    let len=text.length
    setList(foods.filter((i) =>{
      if(i.name.substring(0,len).toLowerCase() === text.toLowerCase())
        return true 
      else 
        return false
    }))
  }
  function showEmpty()
  {
    if(list.length === 0)
    {
      return <div>
        <p>oops ! nothing to show</p>
        <img src="https://cdn-icons-png.flaticon.com/512/43/43533.png" alt="null" width='250px' height='250px' style={{opacity:0.5}}/>
      </div>
    }
  }
  function showForm()
  {
      document.getElementById('new').style.display='none'
      document.querySelector('.form').style.display='block'
  }
  function hideForm()
  {
      document.getElementById('new').style.display='block';
      document.querySelector('.form').style.display='none';
  }
  let btn_style={backgroundColor:'skyBlue',margin:'20px 0'}
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
      <h1>Food List</h1>
      <Input type='text' placeholder='Search' onChange={(e)=>filter(e.target.value)} />
      <Button id='new' style={btn_style} onClick={showForm}>Add new Food</Button>
      <div className='form'>
      <FoodForm 
        foodName={(e) => newFood(e)}
        foodUrl={(e) =>newUrl(e)}
        calo={(e) => newCalo(e)}
        serves={(e) => newServes(e)}
        create={addFood} 
      />
      <Button style={btn_style} onClick={hideForm}>Hide Form</Button>
      </div>
      <div className='foodlist'>
      {list.map( (i,index)=>createItem(i,index) )}
      {showEmpty()}
      </div>
    </div>
  );
}

export default App;
