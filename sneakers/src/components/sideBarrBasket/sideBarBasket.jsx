import './sideBarBasket.scss';
import React from 'react';
import CartItem from "../cartItem/cartItem";

const SideBarBasket = () => {
    return (
        <div className={'sideBarBlock'}>
            <div className={'sideBar'}>
                <h2>Корзина</h2>
                <div className="cartItemWrapper">
                    <CartItem />
                </div>
            </div>
        </div>
    );
};

export default SideBarBasket;