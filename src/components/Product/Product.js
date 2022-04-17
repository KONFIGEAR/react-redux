import React from "react";
import "./styles.css";
export default function Product({ title, img, onClick }) {
  return (
    <div className="single-product">
      <div className="img-wrapper">
        <img src={img} alt="" />
      </div>

      <div className="title">
        <h4>{title}</h4>

        <div className="view-product" onClick={onClick}>
          <span> VIEW </span>
        </div>
      </div>
    </div>
  );
}
