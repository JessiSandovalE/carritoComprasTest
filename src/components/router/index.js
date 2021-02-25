import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
//Components
import Products from '../products'
import Cart from '../cart'

const Menu = () => {
  return(
    <Switch>
      <Route exact path="/"><Products/></Route>
      <Route exact path="/cart"><Cart/></Route>
    </Switch>
  )
}

export default Menu