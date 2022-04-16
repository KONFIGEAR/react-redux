import React from "react";
import "./styles.css";

export default function ProductViewer() {
  return (
    <div className="product-card">
      <img
        className="product-tumb"
        src="https://i.imgur.com/xdbHo4E.png"
        alt=""
      />

      <div className="details">
        <span className="product-catagory">electronic</span>
        <h4>test product</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
          possimus nostrum!
        </p>
        <div className="price">$230.99</div>
        <button className="btn-add">ADD TO CART</button>
      </div>
    </div>
  );
}
