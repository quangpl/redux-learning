let mang = require('./mang');
let isAdding = require('./isAdding');
let redux = require('redux');
let isEditing = require('./isEditing')


let reducer = redux.combineReducers({mang, isAdding,isEditing})

module.exports = reducer
