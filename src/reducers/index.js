let mang = require('./mang');
let isAdding = require('./isAdding');
let redux = require('redux');



let reducer = redux.combineReducers({mang, isAdding})

module.exports = reducer
