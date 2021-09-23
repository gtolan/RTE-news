import rteLogo from '../images/rteLogo.png';
import searchIcon from '../images/searchIcon.svg';
import userIcon from '../images/userIcon.svg';
import '../styles/Navbar.scss';
import useNavbar from './useNavbar';
import { useSelector } from  'react-redux';


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

            <div className="nav-middle">
                <img src={rteLogo} alt='rte navbar logo' className='rte-nav-logo' />
            </div>

            <div className="nav-right">
                <button className="search-nav-icon">
                    <img src={searchIcon} alt='search bar icon button' className='search-icon' />
                </button>

                <button className="user-nav-icon">
                    <img src={userIcon} alt='user icon button' className='search-icon' />
                </button>

                <div className="tablet-menu">
                    <button className="hamburger hamburger--squeeze" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
