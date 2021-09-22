import {  useReducer } from 'react';
import NavbarReducer from  '../Components/NavbarReducer';   
    
    
const useNavbar = () => {
    
    // const contextState = useContext(GlobalContext)
    // const [menuStatus, setToggleMenu] = useState(false); 
    // const {navMenuOpen} = contextState;

    const [{navMenuOpen}, dispatch] = useReducer(NavbarReducer, {navMenuOpen:false});

    const updateNav = () => {
        dispatch({type:'toggleNavbar', payload:navMenuOpen})
    }
    const toggleMenu = (e) => {
        e.preventDefault()
        console.log('tog menu f')
            updateNav()
    }
    return {toggleMenu}

}
export default useNavbar;