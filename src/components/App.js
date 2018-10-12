import React, { Component } from 'react';
import './../assets/styles/App.css';
import DivContainer from './DivContainer';
import Editor from './Editor';
import Previewer from './Previewer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '# Start writing here...',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event){
    this.setState({ text: event.target.value});
  }

  handleClear(){
    this.setState({text: ''});
  }

  render() {
    return (
      <div className="mainApp">
        <div className="titleApp"><h1>Markdown Previewer</h1></div>
        <DivContainer editor={true} handleClear={this.handleClear} title="Editor">
          <Editor  value={this.state.text}  handleChange={this.handleChange} />
        </DivContainer>
        <DivContainer title="Previewer" extraClass="previewerContainer" addStyles={  {right:0} }>
          <Previewer text={ this.state.text } />
        </DivContainer>
      </div>
    );
  }
}

export default App;
