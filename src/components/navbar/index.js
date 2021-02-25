import React, { useContext }from 'react'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'
//Style
import { NavBarStyle } from './style'
//Context
import { ProductsContex} from '../../context/products'
//Component
import  Seach  from '../utils/search' 

const Navbar = () => {
  const { total } = useContext(ProductsContex)
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: '2px solid #fff',
      backgroundColor: '#fff',
      color: '#000',
      padding: '0',
    },
  }))(Badge);

  return (
    <div className={NavBarStyle}>
      <Link to="/" className="logo">
        <img src='./assets/logoWhite.png' alt="logo superfuds" />
      </Link>
      <div  className="search">
        <Seach/>
      </div>
      <div className="profile">
        <Link to="/cart" >
          <IconButton aria-label="cart" className="cart">
            <StyledBadge badgeContent={total}>
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
       </Link>
      <div className="info">
        <div className="data">
          <h4 className="name">Jessica Sandoval</h4>
          <p className="viewProfile">Mi perfil <ExpandMoreIcon/></p>
        </div>
        <Avatar alt="Jessica Sandoval" src="./assets/jessica.png" />
      </div>
    </div>
  </div>
  )
}

export default Navbar
