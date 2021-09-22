import { GlobalContext } from '../GlobalState';
import { useContext } from 'react';

const NavbarReducer = (state, action) => {
    const context = useContext(GlobalContext)
    const { navMenuOpen } = context;
    switch(action.type) {
        case 'toggleNavbar':{
            console.log('toggle Navbar', state, 'state',action.payload)
            return {
                ...state,
                navMenuOpen:!action.payload
            }
        }
        default:
            return state;
        
    }
}
export default NavbarReducer;