import { createStore } from "redux";

interface Actions {
  type: string;
}

function todos(state: number = 0, action: Actions) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(todos);

export default store;
