import React, { useEffect, useState } from "react";
import { getProductsService } from "../services/product";

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const productos = await getProductsService(searchKey);
    setProducts(productos);
  };

  return (
    <section id="home">
      <div className="home-container">
        <h1>Gallery</h1>
        <div className="home-card">
          <p>Show here product cards</p>
        </div>
      </div>
    </section>
  );
};
