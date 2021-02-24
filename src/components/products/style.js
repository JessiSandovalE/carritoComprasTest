import {style} from  'typestyle'

export const ProductsStyle = style({
  margin:'0px 40px',
  $nest: {
    '& .productCard':{
      maxWidth: '220px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      $nest: {
        '& .imageContent':{
          height: '185px',
          position: 'relative',
          padding:'10px 20px',
          boxSizing:'border-box',
          $nest: {
            '& img': {
              width:'100%',
              height: '100%',
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
              backgroundColor: '#269e7e',
              color: '#ffffff',
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
              color: '#25c16a',
              fontWeight:'600'
            },
            '& small':{
              fontWeight:'200',
              fontSize: '1rem',
              paddingLeft:'5px'
            }
          }
        },
        '& .MuiCardActions-root':{
          padding:'0px',
        },
        '& .MuiButton-text':{
          padding: '10px 0px',
          width:'100%',
          backgroundColor: '#25c16a',
          color:'#ffffff',
          fontWeight:'600',
          textTransform:'none'
        }
      }
    },
  }
})