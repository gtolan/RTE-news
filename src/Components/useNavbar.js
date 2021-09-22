import {  useReducer } from 'react';
import NavbarReducer from  '../Components/NavbarReducer';   

    
const useNavbar = () => {
    

    const [{navMenuOpen, menuCategories, headLines}, dispatch] = 
                    useReducer(NavbarReducer, {navMenuOpen:false, 
                        headLines:[{title:'Corona'},{title:'Sport'}, {title:'Top Stories'}],
                        menuCategories:['News', 'Sport', 'Entertainment', 'LifeStyle', 'Business', 'Culture', 'Player', 'TV', 'Radio']
            });


    const toggleMenu = (e) => {
        e.preventDefault()
        console.log('tog menu f')
        dispatch({type:'toggleNavbar', payload:navMenuOpen})
    }
    return {toggleMenu, navMenuOpen, menuCategories, headLines}

}
export default useNavbar;