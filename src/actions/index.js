function addItem(item){
    return {
        type:'ADD_ITEM',
        item:item
    }
}

function deleteItem(index){
    return {
        type:'DELETE_ITEM',
        index:index
    }
}

function toggle(){
    return {
        type:'TOGGLE_IS_ADDING'
    }
}

module.exports = {addItem, deleteItem, toggle}