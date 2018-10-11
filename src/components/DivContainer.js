import React from 'react';
let divStyles = {
  width: ' calc(50vw - 13px)',
  heigth: 'calc(100vh - 100px)',
  border: '2px solid black',
  display: 'inline-block'
}
let subHijosHeader = {
  display: 'inline-block'
};
let stylesChildrenContainer = {
  maxHeight: 'calc(100vh - 200px)', height: 'calc(100vh - 200px)', overflowY: 'auto', overflowX: 'hidden'
};
export default class DivContainer extends React.Component{
  render(){
    return (
      <div className="divContainer" style={ Object.assign({},divStyles, this.props.addStyles)}>
        <div className="header">
          <h1 style={subHijosHeader} >{this.props.title}</h1>
          {this.props.handleClear && <button onClick={this.props.handleClear} style={subHijosHeader} >Clear</button>}
        </div>
        <div className="childrenContainer" style={ this.props.editor ? Object.assign({}, stylesChildrenContainer, {overflowY: 'none'}) : stylesChildrenContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
