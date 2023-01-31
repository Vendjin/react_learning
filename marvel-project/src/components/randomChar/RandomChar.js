import './randomChar.scss';
import hammer from '../../resources/img/mjolnir.png';
import {Component} from "react";
import MarvelService from "../../services/MarvelService";

class RandomChar extends Component {
    state = {
        name: null,
        description: null,
        thumbnail: null,
        homepage: null,
        wiki: null
    }

    // создаем новое свойство marvelService
    marvelService = new MarvelService();

    

    render() {
        const {name, description, thumbnail, homepage, wiki} = this.state;

        return (
            <div className="randomChar">
                <div className="randomChar__block">
                    <img src={thumbnail} alt="Random Character" className="randomChar__img"/>
                    <div className="randomChar__info">
                        <h2 className="randomChar__name">{name}</h2>
                        <div className='randomChar__descr'>
                            {description}
                        </div>

                        <div className='randomChar__btns'>
                            <button className=" button button__main">
                                <a href={homepage}>HOMEPAGE</a>
                            </button>
                            <button className=" button button__secondary">
                                <a href={wiki}>WIKI</a>
                            </button>
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
}

export default RandomChar;