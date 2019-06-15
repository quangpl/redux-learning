
let mangReducer=(state=['Android','iOS','Fullstack'],action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,action.item]
        case 'DELETE_ITEM':
            return state.filter((e,i)=> i!==action.index)
        case 'EDIT_ITEM':
                let newArray=[...state]
                newArray[action.index]=action.item;
                return newArray;
        default :
        return state;
    }
return state;
}

module.exports = mangReducer;
