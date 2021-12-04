import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { getProductsService } from "../services/product";
import { FormattedMessage } from "react-intl";

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, [searchKey]);

  const getData = async () => {
    const productos = await getProductsService(searchKey);
    setProducts(productos);
  };

  return (
    <section id="home">
      <div className="home-container">
        <h1>
          <FormattedMessage id="gallery" />
        </h1>
        <div className="home-card">
          {console.log(products)}
          {products?.map((elem, key) => (
            <Card
              Key={key}
              products={elem}
              name={elem.name}
              picture={elem.picture}
              price={elem.price}
              isActive={elem.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
