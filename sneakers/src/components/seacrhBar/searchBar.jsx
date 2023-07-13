import React from 'react'
import './searchBarStyles.scss';
import searchIcon from '../../assets/images/icons/search.svg';

const SearchBar = () => {
  return (
    <div className='seacrhBlock'>
        <img src={searchIcon} alt='seacrh'/>
        <input placeholder='Поиск...'/>
    </div>
  )
}

export default SearchBar