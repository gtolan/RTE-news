import navbarReducer from './navbarReducer';
import articlesReducer from './articleReducers';
import { combineReducers } from 'redux';

const rootReducer = () => {
    combineReducers({navbar:navbarReducer, articles:articlesReducer})
}

export default rootReducer;

