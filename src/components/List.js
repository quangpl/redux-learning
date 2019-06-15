import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm'
import {connect} from 'react-redux';

import '../App.css'
class List extends React.Component{

  render(){
  return (
    <div className="list">
     <h3>List</h3>
     <NoteForm/>
     {this.props.mang.map((e,i)=><Note index={i} key={i}>{e}</Note>)}
    </div>
  );
}
}

export default connect(function(state){
  return {
    mang : state.mang
  }
})(List);
