import React from 'react';
let style = {
  maxWidth: 'calc(100% - 5px)',
  minWidth: 'calc(100% - 5px)',
  height: 'calc(100% - 5px)',
  overflowY: 'auto',
  resize: 'none',
};
export default class Editor  extends React.Component{
  render(){
    return (
      <textarea id="editor" style={style} value={this.props.value} onChange={ this.props.handleChange }></textarea>
    );
  }
}
