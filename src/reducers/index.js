import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';
import articleReducer from './articleReducer';


export default combineReducers({
        navbar: navbarReducer, 
        art: articleReducer})


