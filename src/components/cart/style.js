import { style } from 'typestyle'

export const CartStyle = style({
  width: '100%',
  marginTop:'50px',
  $nest: {
    '& .list': {
      display: 'flex',
      $nest: {
        '& .product':{
          display: 'flex',
          width: '40%',
          $nest: {
            '& img': {
              width: '20%'
            }
          }
        }
      }
    }
  }
})