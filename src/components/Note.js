import React from 'react';

class Note extends React.Component{
  removeNote(){
    let {index,handleRemove}=this.props;
    handleRemove(index);
  }
    render(){
  return (
    <div>
     <h3>{this.props.index}</h3>
     <div>
         <p>{this.props.children}</p>
         <button onClick={this.removeNote.bind(this)}>Delete</button>
     </div>
    </div>
  );
    }
}

export default Note;
