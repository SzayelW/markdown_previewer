import React from 'react';
let style = {
  maxWidth: 'calc(100% - 5px)',
  minWidth: 'calc(100% - 5px)',
  maxHeight: 'calc(100vh - 100px)',
  minHeight: 'calc(100vh - 100px)',
  overflowY: 'auto',
};
export default class Editor  extends React.Component{
  render(){
    return (
      <textarea style={style} value={this.props.value} onChange={ this.props.handleChange }></textarea>
    );
  }
}
