let isAddingReducer=(state=false, action)=>{
    switch(action.type){
        case 'TOGGLE_IS_ADDING':
            return !state
        default :
        return state;
    }
}

module.exports = isAddingReducer;