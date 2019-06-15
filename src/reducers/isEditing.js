let isEditingReducer=(state=false, action)=>{
    switch(action.type){
        case 'TOGGLE_IS_EDITING':
            return !state
        default :
        return state;
    }
}

module.exports = isEditingReducer;