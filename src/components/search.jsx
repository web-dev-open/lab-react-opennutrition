import React from 'react'
import {Divider,Input} from "antd"
const Search = ({handleSearch}) => {

  function handleChange(e){
    const searchQuery= e.target.value ;

    handleSearch(searchQuery)
  }
  return (
    <>
      <Divider>Search</Divider>
      <label style={{margin:'10px'}}>Search</label>

      <Input 
      style={{
        width:"50%",
        display:'block',
        padding:'10px 20px',
        margin:'10px'

      }}
      value={undefined}
       type="text" 

       onChange={handleChange}

       />
    </>
  )
}

export default Search
