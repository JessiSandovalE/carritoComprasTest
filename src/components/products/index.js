import React, { useEffect, useContext } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
//Style
import { ProductsStyle } from './style'
//API
import { getProducts } from '../../api/products'
//Context
import { ProductsContex } from '../../context/products'


const Products = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const {
    products, setProducts,
    cart, setCart,
    total, setTotal
  } = useContext(ProductsContex)

  useEffect(()=> {
    getProducts()
      .then(response => response.json())
      .then(result => {
        setProducts(result)
      })
      .catch(error => console.log('error', error))
  }, [setProducts])

  const addProduct = (indexCart, itemId)=> {
    const cartCopy = Object.assign({}, cart)
    if (cartCopy[indexCart]){
      cartCopy[indexCart].order +=1
    }else{
      alert('Bye')
    }
  }

  const addCart = (item) => {
    const exist = cart.find(p => p.id === item.id)
    const productId = item.id
    const productCart = {
      id: item.id,
      image:item.image,
      title: item.price_real,
      netContent:item.net_content,
      supplier:item.supplier,
      order: 1,
      price: item.price_real
    }
    if(undefined !== exist && exist !== null) {
      console.log('Ya Existe en la canasta')
      const indexCart = cart.findIndex(x=> x.id === exist.id)
      setTotal(total+1)
      addProduct(indexCart, productId)
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
      {products.map ((item) =>
        <Card key={item.id} className='productCard'>
          <CardContent>
            <div className="imageContent">
              <div className="stamp">
              </div>
              <img src={item.thumbnail} alt={item.title} />
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
          <CardActions>
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
