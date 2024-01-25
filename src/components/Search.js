import React, { useState } from "react";
import { Input } from "antd";

function Search({onSearch}){
    //State managing the search query
    const [searchQuery, setSearchQuery] = useState('');

    //handling changes in the search input
    const handleChange = (e) =>{
        const {value} = e.target;
        //updating the search query state
        setSearchQuery(value);
        //calling the onSearch prop to filter the food list
        onSearch(value);
    }

    return(
        <Input
        placeholder="Search for food..."
        value={searchQuery}
        onChange={handleChange}/>

    )
}
 export default Search;
 