import {style} from 'typestyle'
import {Color} from '../../../styles/var'

export const SearchStyle = style({
  width:'100%',
  display:'flex',
  justifyContent: 'center',
  $nest: {
    '& input': {
      width:'50%',
      border: 'none',
      height:'30px',
      borderTopLeftRadius: '20px',
      borderBottomLeftRadius:'20px',
      padding:'0 20px',
      boxSizing:'border-box',
    },
    '& .searchIcon':{
      backgroundColor: Color.white,
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      borderTopRightRadius: '20px',
      borderBottomRightRadius: '20px',
      padding: '0 20px',
      boxSizing:'border-box',
      color: Color.grey
    }
  }

})