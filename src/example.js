let redux = require('redux');

let defaultState={
   mang: ['Android','iOS','NodeJS','ReactJS'],
   isAdding:false
}
let reducer=(state=defaultState,action)=>{
    switch(action.type){
        case 'TOGGLE_IS_ADDING':
            return {...state,isAdding:!state.isAdding}
        case 'ADD_ITEM':
            return {...state,mang:[...state.mang,action.item]}
        case 'DELETE_ITEM':
            return {...state,mang:[...state.mang.filter((e,i)=> i!==action.index)]}
        default :
        return state;
    }
return state;
}



let store = redux.createStore(reducer);

export default store;