import React from "react";
import "./styles.css";
export default function Product() {
  return (
    <div className="single-product">
      <div className="img-wrapper">
        <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
      </div>

      <div className="title">
        <h4>Product title</h4>

        <div className="view-product">
          <span> VIEW </span>
        </div>
      </div>
    </div>
  );
}
