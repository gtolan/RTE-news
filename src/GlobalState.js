import React from 'react';
import useNavbar from './Components/useNavbar';
export const GlobalContext = React.createContext();


export const GlobalProvider = ({children}) => {

    const { headLines } = useNavbar()
    const provider = { headLines }


    return <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
}