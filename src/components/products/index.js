import React, { useEffect, useContext } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
//Style
import { ProductsStyle } from './style'
//API
import { getProducts } from '../../api/products'
//Context
import { ProductsContex } from '../../context/products'


const Products = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const {
    products, setProducts,
    cart, setCart,
    total, setTotal,
  } = useContext(ProductsContex)

  useEffect(()=> {
    getProducts()
      .then(response => response.json())
      .then(result => {
        setProducts(result)
      })
      .catch(error => console.log('error', error))
  }, [setProducts])

  const addProduct = (indexCart, itemId,totalVal)=> {
    const cartCopy = Object.assign({}, cart)
    if (cartCopy[indexCart]){
    }else{
      console.log('Bye')
    }
  }

  const addCart = (item) => {
    const exist = cart.find(p => p.id === item.id)
    const productId = item.id
    const totalVal = item.price_real
    const productCart = {
      id: item.id,
      image:item.image,
      title: item.title,
      netContent:item.net_content,
      supplier:item.supplier,
      order: 1,
      price: item.price_real,
    }
    if(undefined !== exist && exist !== null) {
      const indexCart = cart.findIndex(x=> x.id === exist.id)
      setTotal(total+1)
      addProduct(indexCart, productId, totalVal)
    }else{
      setCart([...cart,
        productCart
      ])
      setTotal(total+1)
    }
  }

  return (
    <div className={ ProductsStyle }>
      <h3>Nuevo en SuperFuds</h3>
      <Slider { ...settings } >
      {products.map ((item, i) =>
        <Card key={i} className='productCard'>
          <CardContent>
            <div className="imageContent">
              <div className="stamp">
                {item.sellos.map((sello, i) =>
                 <Tooltip key ={i} title= {`Producto ${sello.name}`} placement="right-start" arrow>
                <div>
                  <img src={sello.image} alt={sello.name}/>
                </div>
                </Tooltip>
              )}
              </div>
              <img className="imageProduct" src={item.thumbnail} alt={item.title} />
            </div>
            <hr/>
            <div className="volume">
              <div className="logo">
                <img src="./assets/logoGreen.png" alt="superfüds logo" width='100%' />
              </div>
              <p className="itemVolume"> {item.net_content}</p>
            </div>
            <p className="title">{item.title}</p>
            <p className="price"><span>$</span>{item.price_real}<small className='priceUnids'> x{item.units_sf} unids</small></p>
          </CardContent>
          <CardActions className="btnShow">
            <Button className='addCart' onClick={()=>addCart(item) }>
              Agregar al carrito
            </Button>
          </CardActions>
        </Card>
      )}
      </Slider>
    </div>
  )
}

export default Products
