import React, { useState, createContext } from 'react'
const ProductsContex = createContext()
const { Provider, Consumer } = ProductsContex

const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [ cart, setCart ] = useState([])
  const [suma, setSuma] = useState(0)
  const [total, setTotal] = useState(0)
  const [active, setActive] = useState(false)
  return (
    <Provider
      value = {{
        products, setProducts,
        cart, setCart,
        suma, setSuma,
        total, setTotal,
        active, setActive
      }}
    >
      {children}
    </Provider>
  )
}

export { ProductsProvider, Consumer as ProductsConsumer, ProductsContex}