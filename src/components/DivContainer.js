import React from 'react';
let divStyles = {
  width: ' calc(50vw - 13px)',
  heigth: 'calc(100vh)',
  border: '2px solid black',
  display: 'inline-block',
  position: 'absolute',
  top: 0
}
export default class DivContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let children = this.props.children;
    return (
      <div className="divContainer" style={ Object.assign({},divStyles, this.props.addStyles)}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}
