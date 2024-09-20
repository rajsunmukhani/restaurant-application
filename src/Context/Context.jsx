import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const Context = (props) => {
  const [Products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/data/feeds.json'); // Adjust the path or URL as needed
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      localStorage.setItem("orders", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('orders')) || [];
    if (storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      fetchProducts();
    }
  }, []);

  return (
    <ProductContext.Provider value={[Products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
