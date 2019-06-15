import React from 'react';
import Note from './Note';
import store from '../example'
import NoteForm from './NoteForm'
import '../App.css'
class List extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mang:store.getState().mang
    }
  }
  remove(index){
    this.state.mang.splice(index,1);
    this.setState(this.state);
  }
  addNote(note){
    // this.state.mang.push(note);
    // this.setState(this.state);
    store.dispatch({
      type:'ADD_ITEM',
      item: note
  })
  this.setState({
    mang: store.getState().mang
  })
  }
    render(){
  return (
    <div className="list">
     <h3>List</h3>
     <NoteForm handleAdd={this.addNote.bind(this)}/>
     {this.state.mang.map((e,i)=><Note index={i} handleRemove={this.remove.bind(this)} key={i}>{e}</Note>)}
    </div>
  );
}
}

export default List;
