import React from 'react';
import useNavbar from './Components/useNavbar';

export const NavbarContext = React.createContext()

export const NavbarProvider = ({children}) => {

    const {navMenuOpen, menuCategories} = useNavbar();
    const navState = {navMenuOpen, menuCategories}

    return <NavbarContext.Provider value={navState}>{children}</NavbarContext.Provider>
}
