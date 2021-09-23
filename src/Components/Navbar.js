import rteLogo from '../images/rteLogo.png';
import searchIcon from '../images/searchIcon.svg';
import userIcon from '../images/userIcon.svg';
import '../styles/Navbar.scss';
import useNavbar from './useNavbar';
import { useSelector } from  'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
   
    const navMenuOpen = useSelector(state => {
        console.log(state, 'state')
        return state.navbar.navMenuOpen
    });
    
    console.log('Navbar rendered',navMenuOpen)
    const { toggleMenu } = useNavbar();
     return (
        <nav>
            <div className="nav-left">
                <button className="menu-btn" onClick={toggleMenu}>
                    <div className={`hamburger hamburger--squeeze ${navMenuOpen ? 'is-active' : ''}`} type="button" data-testid='menu button mobile'>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                    </div>
                    <span>
                    Menu
                    </span>
                </button>  
            </div>

            <Link to='/' className="nav-middle">
                <img src={rteLogo} alt='rte navbar logo' className='rte-nav-logo' />
            </Link>

            <div className="nav-right">
                <button className="search-nav-icon">
                    <img src={searchIcon} alt='search bar icon button' className='search-icon' />
                </button>

                <button className="user-nav-icon">
                    <img src={userIcon} alt='user icon button' className='search-icon' />
                </button>

                <button className="tablet-menu menu-btn" onClick={toggleMenu}>
                    <div className={`hamburger hamburger--squeeze ${navMenuOpen ? 'is-active' : ''}`} type="button" data-testid='menu button mobile'>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                    </div>
                </button>  
            </div>
        </nav>
    )
}

export default Navbar
