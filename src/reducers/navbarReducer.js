
const newsConfig = {
    navMenuOpen:false,
    headlines:[{title:'Covid-19'},
                {title:'RTÉ Short Story Shortlist'},
                {title:'United Rugby Championship'},
 
              ],
    menuCategories: ['NEWS',
                     'SPORT',
                    'ENTERTAINMENT',
                    'LIFESTYLE',
                    'CULTURE',
                    'PLAYER',
                    'TV',
                    'RADIO']
}


const navbarReducer = (state = newsConfig, action) => {
    console.log('NR')
    switch(action.type) {
        case 'toggleNavbar':{
            console.log('TOGGLE NAVBAR', state, 'state', action.payload)
            return {
                ...state,
                navMenuOpen:!state.navMenuOpen
            }
        }
        default:
            return state;
        
    }
}
export default navbarReducer;
