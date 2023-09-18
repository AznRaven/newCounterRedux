import { createStore } from "redux";
import counterReducer from "./counterReducer"

// Reducer functions
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "RESET":
//       return (state = 0);
//     default:
//       return state;
//   }
// };

// Create Redux store
const store = createStore(counterReducer);

export default store;
