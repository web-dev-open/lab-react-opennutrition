import { Divider, Input } from 'antd';

function Search({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={handleSearch} placeholder="Enter search query"/>
    </>
  );
}

export default Search;
