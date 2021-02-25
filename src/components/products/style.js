import {style} from  'typestyle'
import {Color} from '../../styles/var'
export const ProductsStyle = style({
  margin:'0px 60px',
  marginTop: '50px',
  $nest: {
    color: Color.darkGrey,
    '& .productCard':{
      maxWidth: '230px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      $nest: {
        '& .imageContent':{
          height: '185px',
          padding:'10px 20px',
          boxSizing:'border-box',
          position:'relative',
          $nest: {
            '& .imageProduct': {
              width:'90%',
              height: '100%',
              position: 'relative'
            },
            '& .stamp': {
              position: 'absolute',
              right:'0'
            }
          }
        },
        '& .volume':{
          margin:'10px 0',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          $nest: {
            '& .itemVolume': {
              backgroundColor: Color.darkGreen,
              color: Color.white,
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              borderRadius: '20px',
              width: '65px',
              height:'20px'
            },
            '& .logo':{
              width: '80px',
            }
          }
        },
        '& .title':{
          width: '185px',
          whiteSpace:'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          fontSize:'1.25rem',
          fontWeight:'400',
          lineHeight: '1.2'

        },
        '& .price': {
          width:'100%',
          fontSize:'1.4rem',
          fontWeight:'bold',
          lineHeight: '2',
          display:'flex',
          alignItems:'center',
          $nest:{
            '& span': {
              color: Color.lightGreen,
              fontWeight:'600'
            },
            '& small':{
              fontWeight:'200',
              fontSize: '14px',
              paddingLeft:'5px',
              color: Color.darkGrey
            }
          }
        },
        '& .btnShow': {
          display: 'none'
        },
      }
    },
    '& .productCard:hover':{
      '& .btnShow': {
        display: 'flex'
      },
    },
    '& .MuiCardActions-root':{
      padding:'0px',
    },
    '& .MuiButton-text':{
      padding: '10px 0px',
      width:'100%',
      backgroundColor: Color.lightGreen,
      color:Color.white,
      fontWeight:'600',
      textTransform:'none'
    },
    '& .slick-arrow': {
      backgroundColor:Color.white,
      height: '30px',
      width: '30px'
    },

    '& .slick-prev:before, .slick-next:before':{
      color: Color.lightGreen,
      fontSize: '30px'
    },
    '& .slick-prev': {
      left:'-40px'
    },
    '& .slick-next': {
      right:'-40px'
    }
  }
})