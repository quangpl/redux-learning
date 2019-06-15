import React from 'react';
import '../App.css'
class Note extends React.Component{
  removeNote(){
    let {index,handleRemove}=this.props;
    handleRemove(index);
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

export default Note;
