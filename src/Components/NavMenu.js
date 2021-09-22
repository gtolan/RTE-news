import '../styles/Navbar.scss';
import useNavbar from './useNavbar'
import { useContext } from 'react';
import { GlobalContext } from '../GlobalState';
import { NavbarContext }from '../NavbarState';

const NavMenu = ({navMenuOpen}) => {

    const {menuCategories} = useContext(NavbarContext);
    
    console.log('NM', menuCategories, navMenuOpen)
    const generateKey = () => {
        return Math.floor(Math.random() * 5000) + 1;
    }

    if(menuCategories.length == 0) return null;

    return (
        <section className={`navbar-menu ${navMenuOpen ? 'expanded' : ''}`}>
            <ul>
                {menuCategories.map(item => {
                    return (<li key={generateKey()}>{item}</li>)
                })}
            </ul>
        </section>
    )
}

export default NavMenu
