
import React, { useState } from 'react';
import { Input } from 'antd'; // Import Ant Design components

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div>
        <h1>Search</h1>
         <Input
      placeholder="Enter Search Query..."
      value={searchQuery}
      onChange={handleChange}
    />
    </div>
    
  );
};

export default Search;
