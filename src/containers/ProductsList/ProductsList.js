import React, { useEffect, useState } from "react";
import "./style.css";
import Product from "../../components/Product/Product";
import { getProducts } from "../../utils/apiService";

export default function ProductViewer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);
  return (
    <div className="product-list-content">
      {products.map((item, key) => (
        <Product key={key} />
      ))}
    </div>
  );
}
