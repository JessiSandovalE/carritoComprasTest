import { style } from 'typestyle'
import {Color} from '../../styles/var'
export const CartStyle = style({
  width: '100%',
  marginTop:'50px',
  $nest: {
    '& .list': {
      display: 'flex',
      width:'100%',
      marginTop: '20px',
      $nest: {
        '& .product':{
          display: 'flex',
          width: '40%',
          $nest: {
            '& img': {
              width: '30%'
            },
            '& .productTitle':{
              fontWeight: 'bold'
            },
            '& .productContent':{
              fontSize:'14px',
              color: Color.darkGrey
            },
            '& .productSupplier':{
              color: Color.lightGreen,
              marginTop: '10px'
            }
          }
        },
        '& .selectQty':{
          width: '20%',
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center',
          $nest: {
            '& button': {
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width: '40px',
              height: '40px',
              margin: '0 10px',
              borderRadius: '100%',
              border: '2px solid',
              borderColor: Color.lightGreen,
              backgroundColor: 'transparent',
              fontSize:'25px',
              color: Color.lightGreen,
            }
          }
        },
        '& .total': {
          width: '20%',
          display: 'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          $nest: {
            '& p': {
              fontSize: '22px',
              fontWeight: 'bold',
              $nest: {
                '& span': {
                  color: Color.lightGreen
                }
              }
            },
            '& button': {
              margin: '0 20px',
              padding: '0',
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: 'large'
            }
          }
        }
      }
    },
    '& button:focus': {
      outline: 'none'
    }
  }
})