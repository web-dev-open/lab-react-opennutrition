import React from 'react';
import { Divider, Input } from 'antd';  // Added Divider

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <Divider>Search</Divider>
      
      <label>Search</label>
      <Input 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        type="text" 
      />
    </>
  );
}

export default SearchBar;

