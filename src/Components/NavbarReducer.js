

const NavbarReducer = (state, action) => {

    switch(action.type) {
        case 'toggleNavbar':{
            console.log('TOGGLE NAVBAR', state, 'state',action.payload)
            return {
                ...state,
                navMenuOpen:!state.navMenuOpen
            }
        }
        default:
            return state;
        
    }
}
export default NavbarReducer;