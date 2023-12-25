import React from 'react';
import { Input } from 'antd';

function Search({ handleSearch }) {
  const handleChange = (e) => {
    const searchQuery = e.target.value;
    handleSearch(searchQuery);
  };

  return (
    <div style={{ marginBottom: '20px', marginTop: '20px', textAlign: 'center' }}>
      <Input
        placeholder="Search food..."
        onChange={handleChange}
        style={{
          width: '30%',
          borderRadius: '20px',
          padding: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}

export default Search;