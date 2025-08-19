import { Input, Divider } from "antd";

function Search({ searchTerm, onSearch }) {
  return (
    <div style={{ marginBottom: "20px", maxWidth: 400, margin: "0 auto" }}>
      <Divider>Search Food</Divider>
      <Input.Search
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for a food..."
        allowClear
        enterButton
      />
    </div>
  );
}

export default Search;
