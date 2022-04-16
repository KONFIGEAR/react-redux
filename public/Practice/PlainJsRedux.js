import "./styles.css";
const redux = require("redux");
// Store : Only source of truth (all data)
// Action : Action name (Description of what to do (Increment))
// Reducer : Descript how action transform state to another state
// Dispatch : Where to execute the action

export default function App() {
  const initialState = {
    count: 10
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1
        };
      case "DECREMENT":
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
  }

  const store = redux.createStore(reducer);

  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch({ type: "INCREMENT" });

  return (
    <div className="App">
      <h1>React Redux</h1>
      <h2>Redux Counter!</h2>
    </div>
  );
}
