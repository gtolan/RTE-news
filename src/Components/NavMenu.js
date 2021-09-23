import '../styles/Navbar.scss';
import { useSelector } from 'react-redux';

const NavMenu = () => {

    const menuCategories = useSelector(state => state.navbar.menuCategories);
    const navMenuOpen = useSelector(state => state.navbar.navMenuOpen);
    
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
