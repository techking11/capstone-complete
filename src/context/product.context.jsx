import { createContext, useState } from "react";

import Products from "../services/products.service";

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts ] = useState(Products);
    const value = { products };
    return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
};