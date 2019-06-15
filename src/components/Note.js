import React from 'react';
import '../App.css'
import {connect} from 'react-redux';
let {deleteItem} = require('../actions');


class Note extends React.Component{
  removeNote(){
    let {index,dispatch}=this.props;
    dispatch(deleteItem(index))
  }
    render(){
  return (
    <div>
     <div>
       <p className="item">{this.props.index} - </p>
         <p className="item">{this.props.children}</p>
         <button className="item" onClick={this.removeNote.bind(this)}>Delete</button>
     </div>
    </div>
  );
    }
}

export default connect()(Note);
