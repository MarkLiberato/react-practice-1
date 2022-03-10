import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

// import { INCREMENT } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 2 });
    // {type: Unique Identifier, payload: 5}
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.Counter}>
      <h1 className={classes["Counter__header"]}>Redux Counter</h1>
      {show && <div className={classes["Counter__value"]}>{counter}</div>}
      <div className={classes["Counter__button-wrapper"]}>
        <button
          onClick={incrementHandler}
          className={classes["Counter__button"]}
        >
          Increment
        </button>
        <button
          onClick={increaseHandler}
          className={classes["Counter__button"]}
        >
          Increase by __
        </button>
        <button
          onClick={decrementHandler}
          className={classes["Counter__button"]}
        >
          Decrement
        </button>
      </div>
      <button
        onClick={toggleCounterHandler}
        className={classes["Counter__button"]}
      >
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;

// class component version

// import { Component } from "react";
// import { connect } from "react-redux";

// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // equivalent to useSelector hook
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// // equivalent to useDispatch hook
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
