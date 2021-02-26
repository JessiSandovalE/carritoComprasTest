import React, { useContext } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
//Styles
import { container } from '../../styles/var'
import { CartStyle } from './style'
//Context
import { ProductsContex } from '../../context/products'

const Cart = () => {
  const {
    cart, setCart,
    total, setTotal,
    suma, setSuma
  } = useContext( ProductsContex )
  const  qty = cart.length

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
      console.log('error')
    }
  }

  const removeProduct = (item) => {
    console.log(item)
  }
  const addMore = (item) => {
    const copyCart = Object.assign({}, cart)
    const indexCart = cart.findIndex(x => x.id === item.id)
    if (copyCart[indexCart]){
      copyCart[indexCart].order += 1
    }else{
      console.log('bye')
    }
  }

  return (
    <div className={CartStyle}>
      <div className={container}>
        <div>
          <h2>Carrito de compras </h2> 
          <p>Cantidad: {qty}</p>
        </div>
        {cart.length>0 &&
          <table>
            <thead>
              <tr className="list">
                <th className="product" >Item</th>
                <th className="selectQty">Cantidad</th>
                <th className="total">Precio</th>
              </tr>
            </thead>
            <tbody>
            { cart.map((item, i) =>
              <tr className="list" key={i}>
                <td className="product">
                  <img src={item.image} alt={item.title}/>
                  <div>
                    <p className='productTitle'>{item.title}</p>
                    <p className="productContent">{item.netContent}</p>
                    <p className="productSupplier">{item.supplier}</p>
                  </div>
                </td>
                <td className="selectQty">
                <button onClick={() => removeProduct(item) }> - </button>
                  {item.order}
                <button onClick={() => addMore(item)}> + </button>
                </td>
                <td className="total">
                  <p>
                    <span>$</span> {item.price*item.order} 
                    <button onClick={()=> deleteProduct(item)}>
                      <DeleteOutlineIcon/>
                    </button>
                  </p>
                </td>
                </tr>
            )}
            </tbody>
          </table>
        }
     </div>
    </div>
  )
}

export default Cart
