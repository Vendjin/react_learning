import React, { useEffect, useState } from 'react';
import './cardStyles.scss';
import plus from '../../assets/images/icons/plus.svg';
import unLiked from '../../assets/images/icons/unLiked.png';
import liked from '../../assets/images/icons/liked.svg';
import ok from '../../assets/images/icons/ok.svg'

const Card = ({ name, price, image }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [currentPrice, setCurrentPrice] = useState('')

    useEffect(() => {
        separatePrice(price)
    }, [price])

    const separatePrice = (price) => {
        if (price.length === 5) {
            setCurrentPrice(price.slice(0, 2) + ' ' + price.slice(2))
        } else {
            setCurrentPrice(price.slice(0, 1) + ' ' + price.slice(1))
        }
    }

    const handleIsLiked = () => {
        setIsLiked(!isLiked)
    }

    const [isAddBasket, setIsAddBasket] = useState(false)
    const handleIsAddBasket = () => {
        setIsAddBasket(!isAddBasket)
    }
    return (
        <div className='cardWrapper'>
            <img width={133} height={112} src={image} alt='sneakers' />
            <p>{name}</p>
            <button className='liked' onClick={handleIsLiked}>
                {isLiked ?
                    (<img src={liked} alt='liked'></img>) :
                    (<img src={unLiked} alt='unLiked'></img>)}

            </button>
            <div className='d-flex justify-between'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{currentPrice} руб.</b>
                </div>
                <button className='buttonPay' onClick={handleIsAddBasket}>
                    {isAddBasket ? (<img src={ok} alt='ok' />) : (<img src={plus} alt='plus' />)}
                </button>
            </div>
        </div>
    )
}

export default Card