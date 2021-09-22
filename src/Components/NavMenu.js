import '../styles/Navbar.scss';
import { useContext } from 'react';
import { GlobalContext } from '../GlobalState';


const NavMenu = () => {
    const {menuCategories, navMenuOpen} = useContext(GlobalContext)
    const items = [1,2,4,5];
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
