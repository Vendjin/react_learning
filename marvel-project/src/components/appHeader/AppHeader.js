import './appHeader.scss';
import {Link, NavLink} from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link to="/">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="header__menu">
                <ul>
                    {/*react-router-dom v5
                    <li><NavLink to='/' exact activeStyle={{color: '#9F0013'}}> Characters </NavLink></li>
                    /
                    <li><NavLink to='/comics' exact activeStyle={{color: '#9F0013'}}> Comics</NavLink></li>*/}
                    <li><NavLink
                        to='/'
                        end
                        style={({isActive}) => ({color: isActive ? '#9F0013' : '#232222'})}>
                        Characters
                    </NavLink></li>
                    /
                    <li><NavLink
                        to='comics'
                        end
                        style={({isActive}) => ({color: isActive ? '#9F0013' : '#232222'})}>
                        Comics
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;