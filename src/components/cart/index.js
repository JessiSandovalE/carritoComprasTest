import React, { useContext } from 'react'
//Styles
import { container } from '../../styles/var'
import { CartStyle } from './style'
//Context
import { ProductsContex } from '../../context/products'

const Cart = () => {
  const {
    cart, setCart,
    total, setTotal
  } = useContext( ProductsContex )
  const deleteProduct = ( item ) => {
    const id = item.id
    let cartNew = cart.find (p => p.id === id)
    let indexCart = cart.findIndex(x => x.id === cartNew.id)

    let statusCopy = Object.assign({}, cart)
    if(statusCopy[indexCart].order){
      const productFilter = cart.filter (item => item.id !==id)
      setCart(productFilter)
      let newTotal = total - statusCopy[indexCart].order
     setTotal(newTotal)
    }else{
      console.log('bye')
    }
  }

  const removeProduct = (item) => {
    console.log(item)
  }

  return (
    <div className={CartStyle}>
      <div className={container}>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
          { cart.map((item, i) =>
            <tr className="list">
              <td  key={i} className="product">
                <img src={item.image} alt={item.title}/>
                <div>
                  <p>{item.title}</p>
                  <p>{item.netContent}</p>
                  <p>{item.supplier}</p>
                </div>
              </td>
              <td>
               <button onClick={() => removeProduct(item) }> - </button>
                {item.order}
               <button > + </button>
              </td>
              <td>
                {item.price*item.order}
              </td>
                <button onClick={()=> deleteProduct(item)}>Eliminar</button>
              </tr>
          )}
          </tbody>
      </table>
      </div>
    </div>
  )
}

export default Cart
