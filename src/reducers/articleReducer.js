const articleInitialState = {articlesWithImages:[], articlesWithoutImages:[]};

const articleReducer = (state = articleInitialState, action) => {
    switch (action.type){
        case 'addArticlesWithImages':
            return {...state, articlesWithImages: action.payload};
        
        case 'addArticlesWithoutImages':
            return {...state, articlesWithoutImages: action.payload};
        
        default :{
            return state;
        }
    }

}

export default articleReducer;