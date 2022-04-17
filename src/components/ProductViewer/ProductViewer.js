import React from "react";
import "./styles.css";


export default function ProductViewer({ category, title, image, description, price, onClick }) {


  return (
    <div className="product-card">
      <img
        className="product-tumb"
        src={image}
        alt=""
      />

      <div className="details">
        <span className="product-catagory">{category}</span>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="price"><span>$</span>{price}</div>
        <button onClick={onClick} className="btn-add">ADD TO CART</button>
      </div>
    </div>
  );
}


// ProductViewer.defaultProps = {
//   cat: "electronic",
//   title: "230.99",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
//   price: "230.99",
// }