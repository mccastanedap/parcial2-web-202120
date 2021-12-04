import React, { useState, useEffect } from "react";
import { Chart } from "../components/Chart";
import { getProductsService } from "../services/product";
export const Report = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, [" "]);

  const getData = async () => {
    const productos = await getProductsService(" ");
    setProducts(productos);
  };

  return (
    <section id="report">
      <div className="report-container">
        <h1>Unidades en inventario</h1>
        <p>
          <Chart data={products} />
        </p>
      </div>
    </section>
  );
};
