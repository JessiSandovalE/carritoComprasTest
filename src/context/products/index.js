import React, { useState, createContext } from 'react'
const ProductsContex = createContext()
const { Provider, Consumer } = ProductsContex

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([])

  return (
    <Provider
      value = {{
        products, setProducts
      }}
    >
      {children}
    </Provider>
  )
}

export { ProductsProvider, Consumer as ProductsConsumer, ProductsContex}