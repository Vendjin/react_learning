import './headerStyles.scss';
import React from 'react'
import Logo from '../../assets/images/logo.svg';
import Basket from '../../assets/images/icons/basket.svg';
import Favorite from '../../assets/images/icons/favorite.svg';
import Profile from '../../assets/images/icons/profile.svg';

const HeaderComponent = () => {
    return (
        <header>
            <div className='headerLogo'>
                <img src={Logo} alt="logo" />
                <div className='headerInfo'>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кросcовок</p>
                </div>
            </div>

            <div className='headerPrice'>
                <div className='basketWrapper'>
                    <img src={Basket} alt="Basket" />
                    <p>1205 руб.</p>
                </div>
                <div className='favoriteWrapper'>
                    <img src={Favorite} alt="Favorite" />
                    <img src={Profile} alt="Profile" />
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent