import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

import Product from "../../components/Product/Product";
import { getProducts } from "../../utils/apiService";
import { loadProducts, setError, setSelectedProduct } from "./actions";

export default function ProductViewer() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(globStat => globStat.productsState)

  useEffect(() => {
    getProducts().then((products) => {
      dispatch(loadProducts(products))

    }).catch(err => { dispatch(setError(true)) });
  }, []);

  const handleClick = (id) => {
    dispatch(setSelectedProduct(id))

  }
  if (error) return <h2>ERROR</h2>

  if (loading) return <h1>LOADING</h1>

  return (
    <div className="product-list-content">
      {products.map((item, key) => (
        <Product title={item.title} img={item.image} key={key} onClick={() => handleClick(item.id)} />
      ))}
    </div>
  );
}
