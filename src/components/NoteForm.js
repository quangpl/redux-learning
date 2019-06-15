import React from 'react';
import '../App.css'
import {connect} from 'react-redux';
let {toggle,addItem} = require('../actions');
class NoteForm extends React.Component{

  handleToggle(){
    let {dispatch} = this.props;
    dispatch(toggle())
  }

  handleSubmit(e){
    e.preventDefault();
    let {dispatch} = this.props;
    dispatch(addItem(this.refs.txt.value))
    this.refs.txt.value='';
    dispatch({
      type:'TOGGLE_IS_ADDING'
    })

  }
    render(){
  if(this.props.isAdding) return (
    <div>
 <form onSubmit={this.handleSubmit.bind(this)}>
  <input type="text" ref="txt" placeholder="Enter text"></input>
  <button> Add</button>
  </form>     
  <button onClick={this.handleToggle.bind(this)}>+</button>
    </div>
  );
  return <button onClick={this.handleToggle.bind(this)}>+</button>
    }
}

export default connect(function (state){
  return {
    isAdding: state.isAdding
  }
})(NoteForm);
