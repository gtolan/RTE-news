import React from 'react';

export const GlobalContext = React.createContext();

const initialState = {
                        headLines:[{title:'Corona'},{title:'Sport'}, {title:'Top Stories'}],
                        menuCategories:['News', 'Sport', 'Entertainment', 'LifeStyle', 'Business', 'Culture', 'Player', 'TV', 'Radio']
                     }

export const GlobalProvider = ({children}) => {
    return <GlobalContext.Provider value={initialState}>{children}</GlobalContext.Provider>
}