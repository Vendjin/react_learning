import './cartItem.scss';
import React from 'react';
import deleteItem from '../../assets/images/icons/deleteItem.svg'
import cross from '../../assets/images/sneakers/2.png'

const CartItem = ({title, price, image}) => {
    return (
        <div className="cartItem">
            <div className={'cartItem__img'}>
                <img src={cross} alt="sneakers"/>
            </div>
            <div className="cartItem__description">
                <div className="cartItem__header">{title}Мужские Кроссовки Nike Air Max 270</div>
                <div className="cartItem__price">{price}8 499 руб.</div>
            </div>
            <button className="cartItem__button">
                <img src={deleteItem} alt=""/>
            </button>
        </div>
    );
};

export default CartItem;