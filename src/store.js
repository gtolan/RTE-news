import { createStore } from 'redux';


const newsConfig = {
    navbarOpen:false,
    headlines:[1,2,3],
    menuCategories: [4,5,6]
}

const appReducer = (state = newsConfig, action) => {
    switch (action.type){
        case 'TOGGLE NAVBAR' :{
            return {
                ...state,
                navbarOpen:!state.navbarOpen
            }
        }
        default: {
            return state
        }
    }
};

export default appReducer;