import React, { Component } from 'react';
import logo from './../logo.svg';
import './../assets/styles/App.css';
import DivContainer from './DivContainer';
import Editor from './Editor';
import Previewer from './Previewer';

class App extends Component {
  render() {
    return (
      <div className="mainApp">
        <DivContainer title="Editor">
          <Editor />
        </DivContainer>
        <DivContainer title="Previewer" addStyles={  {right:0} }>
          <Previewer />
        </DivContainer>
      </div>
    );
  }
}

export default App;
