import React, { useState } from 'react';
import { Input, Card } from 'antd';

export default function Search({ filterFood }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterFood(e.target.value);
  };

    return (
        <>
            <Card className='food-card search-bar'>
                <Input placeholder="Search food" value={searchTerm} onChange={handleSearch} />
            </Card>
        </>
    )
        
}
