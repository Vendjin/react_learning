import React, {useState} from 'react';
import './cardStyles.scss';
import plus from '../../assets/images/icons/plus.svg';
import unliked from '../../assets/images/icons/unLiked.png';
import liked from '../../assets/images/icons/liked.svg';
import ok from '../../assets/images/icons/ok.svg'

const CardComponent = () => {
    const [isLiked, setIsLiked] = useState(false);
    const handleIsLiked = () => {
        setIsLiked(!isLiked)
    }

    const [isAddBasket, setIsAddBasket]= useState(false)
    const handleIsAddBasket = () => {
        setIsAddBasket(!isAddBasket)
    }
    return (
        <div className='cardWrapper'>
            <img width={133} height={112} src='/img/sneakers/1.png' alt='sneakers'/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <button className='liked' onClick={handleIsLiked}>
                {isLiked ?
                    (<img src={liked} alt='liked'></img>) :
                    (<img src={unliked} alt='unLiked'></img>)}

            </button>
            <div className='d-flex justify-between'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>12 999руб.</b>
                </div>
                <button className='buttonPay' onClick={handleIsAddBasket}>
                    {isAddBasket ? (<img src={ok} alt='ok'/>):(<img src={plus} alt='plus'/>)}
                </button>
            </div>
        </div>
    )
}

export default CardComponent