
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(rootReducer, initialState, 
                composeSetup(applyMiddleware(...middleWare)
            
))

export default store;


