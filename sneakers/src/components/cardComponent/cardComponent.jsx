import React from 'react';
import './cardStyles.scss';
import plus from '../../assets/images/icons/plus.svg';
import unliked from '../../assets/images/icons/unLiked.png';

const CardComponent = () => {
    return (
        <div className='cardWrapper'>

            <img width={133} height={112} src='/img/sneakers/1.png' alt='sneakers'></img>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='liked'>
                <img src={unliked} alt='unLiked'></img>
            </div>
            <div className='d-flex justify-between'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>12 999руб.</b>
                </div>
                <button className='buttonPay'>
                    <img src={plus} alt='plus'></img>
                </button>
            </div>
        </div>
    )
}

export default CardComponent