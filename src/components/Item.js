import React, { useState } from "react";

function Item({ name, category }) {

  let [addItem, setAddItem] = useState(false);
  
  function handleAdd() {
    setAddItem(addItem => !addItem);
  }

  return (
    <li className={addItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd} className="add">{addItem ? "Remove from Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
