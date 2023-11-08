import React from 'react'
import './searchBarStyles.scss';
import searchIcon from '../../assets/images/icons/search.svg';

const SearchBar = () => {
  return (
    <div className='searchBlock'>
        <img src={searchIcon} alt='search'/>
        <input placeholder='Поиск...'/>
    </div>
  )
}

export default SearchBar