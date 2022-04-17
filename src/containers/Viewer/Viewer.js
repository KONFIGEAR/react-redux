import React, { useEffect, useState } from "react";
import "./style.css";

import ProductViewer from "../../components/ProductViewer/ProductViewer";

import { useDispatch, useSelector } from "react-redux";


export default function Viewer() {
  const selectedProduct = useSelector(globStat => globStat.productsState.selectedProduct)

  return (
    <div className="product-viewer-wraper">
      {selectedProduct && <ProductViewer
        {...selectedProduct} />}
    </div>
  );
}
