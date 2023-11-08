import './sideBarBasket.scss';
import React from 'react';
import CartItem from "../cartItem/cartItem";
import arrowIcon from '../../assets/images/icons/arrow.svg';
import closeSideBar from '../../assets/images/icons/deleteItem.svg'

const SideBarBasket = ({ isOpen, setIsOpen }) => {
    const handleCloseSideBar = () => {
        setIsOpen(false)
    }

    return (
        <>
            {isOpen && (
                <div className='sideBarBlock' >
                    <div className='sideBar'>
                        <div className='d-flex justify-between'>
                            <h2>Корзина</h2>
                            <img src={closeSideBar} alt="closeSideBAr" className='cu-p' onClick={handleCloseSideBar} />
                        </div>
                        <div className="sideBarWrapper">
                            <div className="cartItemWrapper">
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                                <CartItem />
                            </div>
                            <div className="sideBarOrderBlock d-flex flex-column">
                                <div className='d-flex'>
                                    <span>Итого: </span>
                                    <div className='dashed' />
                                    <b>21 498 руб.</b>
                                </div>
                                <div className='d-flex'>
                                    <span>Налог 5%: </span>
                                    <div className='dashed' />
                                    <b>1074 руб.</b>
                                </div>
                                <div>
                                    <button>Оформить заказ</button>
                                    <img src={arrowIcon} alt="arrow" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SideBarBasket;