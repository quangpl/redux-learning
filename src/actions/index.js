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


function editItem(item,index){
    return {
        type:'EDIT_ITEM',
        item:item,
        index:index
    }
}



module.exports = {addItem, deleteItem, toggle,editItem}