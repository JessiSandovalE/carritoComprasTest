import React from 'react'
import Aplication from './components'
//Providers
import {ProductsProvider} from './context/products'

function App() {
  return (
    <>
      <ProductsProvider>
        <Aplication/>
      </ProductsProvider>
    </>
  );
}

export default App;
