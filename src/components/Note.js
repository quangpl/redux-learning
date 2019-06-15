import React from 'react';
import '../App.css'
import {connect} from 'react-redux';
let {deleteItem,editItem} = require('../actions');


class Note extends React.Component{
  removeNote(){
    let {index,dispatch}=this.props;
    dispatch(deleteItem(index))
  }
  editNote(){
    let {index,dispatch}=this.props;
    if(this.refs.txtEdit.value){
      dispatch(editItem(this.refs.txtEdit.value,index));
      this.refs.txtEdit.value='';
    }
   
  }
    render(){
  return (
    <div>
     <div>
       <p className="item">{this.props.index} - </p>
         <p className="item">{this.props.children}</p>
         <button className="item" onClick={this.removeNote.bind(this)}>Delete</button>
         <button className="item" onClick={this.editNote.bind(this)}>Edit</button>
         <input type="text" ref="txtEdit" placeholder="Enter text to edit"></input>
         
     </div>
    </div>
  );
    }
}

export default connect(function (state){
  return {
   // isEditing : state.isEditing,
    mang : state.mang
  }
})(Note);
