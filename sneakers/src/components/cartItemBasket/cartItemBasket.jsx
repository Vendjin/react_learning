import './cartItemBasket.scss';
import React from 'react';
import deleteItem from '../../assets/images/icons/deleteItem.svg'
import cross from '../../assets/images/sneakers/2.png'

const BasketItem = ({ name, price, image}) => {
    return (
        <div className="cartItem">
            <div className='cartItem__img'>
                <img  width={70} height={70} src={cross} alt="sneakers"/>
            </div>
            <div className="cartItem__description">
                <div className="cartItem__description_header">{name}Мужские Кроссовки Nike Air Max 270</div>
                <div className="cartItem__description_price">{price}8 499 руб.</div>
            </div>
            <button className="cartItem__button">
                <img src={deleteItem} alt="cartItemCloseBtn"/>
            </button>
        </div>
    );
};

export default BasketItem;