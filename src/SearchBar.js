import { Input } from "antd";

function SearchBar({ updateFilteredFoods }) {
  function handleSearch(event) {
    updateFilteredFoods((prev) => {
      return {
        ...prev,
        filteredFoods: prev.foods.filter((food) => {
          return food.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        }),
      };
    });
  }
  return <Input placeholder="Search" onChange={handleSearch} />;
}

export default SearchBar;
