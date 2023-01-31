import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import hammer from '../../resources/img/mjolnir.png';

const RandomChar = () => {
    return (
        <div className="randomChar">
            <div className="randomChar__block">
                <img src={thor} alt="Random Character" className="randomChar__img"/>
                <div className="randomChar__info">
                    <h2 className="randomChar__name">Thor</h2>
                    <div className='randomChar__descr'>
                        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made,
                        the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish
                        imbecile, he's quite smart and compassionate...
                    </div>

                    <div className='randomChar__btns'>
                        <button className=" button button__main">HOMEPAGE</button>
                        <button className=" button button__secondary">WIKI</button>
                    </div>
                </div>
            </div>
            <div className="randomChar__static">
                <div className="randomChar__title">Random character for today!<br/>
                    Do you want to get to know him better?
                </div>
                <div className="randomChar__title">Or choose another one</div>
                <button className=" button button__main">TRY IT</button>
                <img src={hammer} alt="Random Character" className='randomChar__decoration'/>


            </div>

        </div>
    )
}

export default RandomChar;