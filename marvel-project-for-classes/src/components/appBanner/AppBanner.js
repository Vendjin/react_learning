import './appBanner.scss';
import avengersLogo from '../../resources/img/Avengers_logo.png';
import avengers from '../../resources/img/Avengers.png';

const AppBanner = () => {
    return (
        <div className='app__banner'>
            <img src={avengers} alt="avengers"/>
            <div className="app__banner-text">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="avengersLogo"/>
        </div>
    )
}

export default AppBanner;