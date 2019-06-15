
let mangReducer=(state=['Android','iOS','Fullstack'],action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,action.item]
        case 'DELETE_ITEM':
            return state.filter((e,i)=> i!==action.index)
        default :
        return state;
    }
return state;
}

module.exports = mangReducer;
