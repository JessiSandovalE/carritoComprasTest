import { style } from 'typestyle'
import {Color} from '../../styles/var'
export const NavBarStyle = style({
  width:'100%',
  height: '100px',
  backgroundColor: '#25c16a',
  color: '#fffff',
  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  padding:'0px 40px',
  boxSizing: 'border-box',
  $nest: {
    '& .logo':{
      width: '10%'
    },
    '& .search':{
      width: '70%',
      display:'flex',
      justifyContent:'center'
    },
    '& .profile':{
      width: '20%',
      display:'flex',
      $nest:{
        '& .cart':{
          color: Color.white,
          width: '30%'
        },
        '& .info':{
          width: '70%',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          $nest:{
            '& .name':{
              color: Color.white
            },
            '& .viewProfile':{
              display:'flex',
              alignItems:'center',
              justifyContent:'flex-end',
              fontSize:'14px',
              color: Color.darkGrey
            }
          }
        }
      }
    }
  }
})