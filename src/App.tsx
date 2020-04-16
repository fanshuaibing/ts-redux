import React, { useState } from "react";
import store from "./store";

function App() {
  const [number, setNumber] = useState(store.getState());
  function add() {
    store.dispatch({ type: "ADD" });
  }
  function minus() {
    store.dispatch({ type: "MINUS" });
  }
  store.subscribe(() => setNumber(store.getState()));
  return (
    <div>
      <div>{number}</div>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  );
}

export default App;
