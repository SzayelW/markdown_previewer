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
  maxHeight: 'calc(100vh - 200px)',
  height: 'calc(100vh - 200px)',
  overflowX: 'hidden',
  overflowY: 'auto',
};
export default class DivContainer extends React.Component{
  render(){
    return (
      <div className={"divContainer "+(!this.props.extraClass ? '' : this.props.extraClass)} style={ Object.assign({},divStyles, this.props.addStyles)}>
        <div className="header">
          <div style={subHijosHeader}>
            <h1 >{this.props.title}</h1>
          </div>
          <div className="botones" style={subHijosHeader}>
            {this.props.handleClear && <button onClick={this.props.handleClear} style={subHijosHeader} >Clear</button>}
            {this.props.handleSave && <button onClick={this.props.handleSave} style={subHijosHeader} >Save</button>}
            {this.props.handleLoad && <button onClick={this.props.handleLoad} style={subHijosHeader} >Load</button>}
          </div>
        </div>
        <div className="childrenContainer" style={ !this.props.editor ? stylesChildrenContainer : Object.assign({},stylesChildrenContainer, {overflowY: 'hidden'}) } >
          {this.props.children}
        </div>
      </div>
    );
  }
}
