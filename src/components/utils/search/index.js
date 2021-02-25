import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
//Style
import {SearchStyle} from './style'

const Seach = () => {
  return (
    <div className={SearchStyle}>
      <input type='text' placeholder='Busca marcas y productos'/>
      <div className="searchIcon">
        <SearchIcon/>
      </div>
    </div>
  )
}

export default Seach
