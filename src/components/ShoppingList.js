import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let [filterItems, setFilterItems] = useState("All")

  function handleSelect(e) {
    setFilterItems(e.target.value)
  }

  const itemsFilter = items.filter((item) => {
    if (filterItems === "All") {
       return filterItems;
    }

    return item.category === filterItems;
  });
  

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
