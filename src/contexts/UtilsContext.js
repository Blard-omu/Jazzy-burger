import React, { createContext, useState } from 'react';
import data from '../ProductStore';

const UtilsContext = createContext();

const UtilsProvider = ({ children }) => {
const [products, setProducts] = useState(data)

  const handleIncrease = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.count += 1;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleReduce = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id && product.count > 1) {
        product.count -= 1;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const toCartButton = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.cart = !product.cart;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const utils = {
    handleIncrease,
    handleReduce,
    toCartButton,
  };

  return (
    <UtilsContext.Provider value={utils}>
      {children}
    </UtilsContext.Provider>
  );
};

export { UtilsContext, UtilsProvider };
