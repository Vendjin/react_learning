import Logo from './assets/images/logo.svg';
import Basket from './assets/images/basket.svg';
import Favorite from './assets/images/favorite.svg';
import Profile from './assets/images/profile.svg';
function App() {

    return (
        <div className='wrapperRoot'>
            <header>
                <div className='headerLogo'>
                    <img src={Logo} alt="logo"/>
                    <div className='headerInfo'>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кросcовок</p>
                    </div>
                </div>

                <div className='headerPrice'>
                    <div className='basketWrapper'>
                        <img src={Basket} alt="Basket"/>
                        <p>1205 руб.</p>
                    </div>
                    <div className='favoriteWrapper'>
                        <img src={Favorite} alt="Favorite"/>
                        <img src={Profile} alt="Profile"/>
                    </div>
                </div>
            </header>

            <div className='content'>
                <h1>Все кросовки</h1>
                ...
            </div>
        </div>
    );
}

export default App;
