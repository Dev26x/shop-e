import { createContext, useState, useEffect } from 'react';

//Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
//products state
  const [products, setProducts] = useState([])

//fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products', {
        headers: {
        'x-cors-api-key': 'temp_49ed6ce9a86f74084f702d1528333f21'
        }
      });
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [])
  
  return <ProductContext.Provider value={{products}}>
      { children }
  </ProductContext.Provider>;
};

export default ProductProvider;
