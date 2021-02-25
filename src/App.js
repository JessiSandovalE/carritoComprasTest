import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
//Components
import Aplication from './components'
//Providers
import {ProductsProvider} from './context/products'

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Aplication/>
      </Router>
    </ProductsProvider>
  );
}

export default App;
