import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// export const INCREMENT = "increment";

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment": {
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     }
//     case "increase": {
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     }
//     case "decrement": {
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     }
//     case "toggle": {
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type == "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  //   reducer: { counter: counterSlice.reducer },    if many reducer
  // since only one is defined in here;
  // reducer: counterSlice.reducer,

  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
