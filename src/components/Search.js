import React from 'react';
import { Input } from 'antd';

const Search = ({ value, onChange }) => {
  return (
    <div style={{margin: "0px 200px 0px 200px"}}>
        <Input
        placeholder="Search Food..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
  );
};

export default Search;