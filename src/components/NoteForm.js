import React from 'react';
import store from '../example'
class NoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isAdding:false
    }
  }

  handleDisplatch(){
    store.dispatch({
      type:'ADD_ITEM',
      item:'Androiddeveloper'
  })
  console.log(store.getState());
  }
  handleToggle(){
    this.setState({
      isAdding:!this.state.isAdding
    });
  }
  handleSubmit(e){
    e.preventDefault();
    let { handleAdd }= this.props;
    handleAdd(this.refs.txt.value);
    this.refs.txt.value='';

  }
    render(){
  if(this.state.isAdding) return (
    <div>
 <form onSubmit={this.handleSubmit.bind(this)}>
   <input type="text" ref="txt" placeholder="Enter text"></input>
  <button> Add</button>
  </form>     
  <button onClick={this.handleToggle.bind(this)}>+</button>
  <button onClick={this.handleDisplatch.bind(this)}>dispatch</button>
    </div>
  );
  return <button onClick={this.handleToggle.bind(this)}>+</button>
    }
}

export default NoteForm;
