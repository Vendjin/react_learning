import './charList.scss';
import abyss from '../../resources/img/abyss.jpg'

const CharList =() =>{
    return(
        <div className='char__list'>
            <ul className='char__list_wrapper'>
                <li className='char__item'>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>
                <li className='char__item'>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>
                <li className='char__item char__item_selected'>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>
                <li className='char__item'>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>

                <li className='char__item'>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>
                <li className='char__item'>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>
                <li className='char__item'>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>

                <li className='char__item '>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>
                <li className='char__item'>
                    <img src={abyss} alt="abyss"/>
                    <div className='char__name'>Abyss</div>
                </li>
            </ul>

            <button className='button__main button__long'>LOAD MORE</button>
    </div>
    )
}

export default CharList;