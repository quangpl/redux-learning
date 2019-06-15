let redux = require('redux');
let reducer = require('./reducers');
let store = redux.createStore(reducer);

export default store;