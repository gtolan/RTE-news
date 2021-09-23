const articles = [];

const articleReducer = (state = articles, action) => {
    switch (action.type){
        case 'addArticles':{
            return {...state, articles};
        }
        default :{
            return state;
        }
    }

}

export default articleReducer;