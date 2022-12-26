import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  let [darkLight, setDarkLight] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkLight ? "App dark" : "App light";
  
  function handleChange() {
    setDarkLight(darkLight => !darkLight)
        
  }
 
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleChange}>{darkLight ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />

    </div>

    
  );
}

export default App;
