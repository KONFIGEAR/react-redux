import "./styles.css";
import React from "react";
import Cart from "../../containers/Cart/Cart";
import Viewer from "../../containers/Viewer/Viewer";
import ProductsList from "../../containers/ProductsList/ProductsList";

// Store : Only source of truth (all data)
// Action : Action name (Description of what to do (Increment))
// Reducer : Descript how action transform state to another state
// Dispatch : Where to execute the action

export default function Home() {
  return (
    <div className="App">
      <div className="header">
        <h1>React Redux</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <div className="containers">
        <ProductsList />
        <Viewer />
        <Cart />
      </div>
    </div>
  );
}
