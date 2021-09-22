import Navbar from './Navbar';
import HeadlinesNavbar from './HeadlinesNavbar';
import NavMenu from './NavMenu';
import useNavbar from './useNavbar';

const NavbarControls = () => {

    const {toggleMenu, navMenuOpen} = useNavbar();


    return (
        <>
            <Navbar {...{toggleMenu, navMenuOpen}} />
            <HeadlinesNavbar {...{toggleMenu, navMenuOpen}} />
            <NavMenu {...{toggleMenu, navMenuOpen}} />
        </>
    )
}

export default NavbarControls
