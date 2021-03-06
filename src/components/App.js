import React, { Component } from 'react';
import './../assets/styles/App.css';
import DivContainer from './DivContainer';
import Editor from './Editor';
import Previewer from './Previewer';
import {API, INITIAL_STATE} from './../consts/consts';

class App extends Component {
  constructor(props){
    super(props);
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  handleChange(event){
    this.setState({ text: event.target.value});
  }

  handleClear(){
    this.setState({text: ''});
  }
  handleSave(){
    if(!this.state.text || this.state.text === this.state.fetchData ) return;
    let opciones = {
      method: 'PUT',
      body: JSON.stringify({text: this.state.text}),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    fetch(API, opciones)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));;
  }

  handleLoad(){
    fetch(API)
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => { this.setState({text: response.text, fetchData: response.text }) } );
  }

  render() {
    return (
      <div className="mainApp">
        <div className="titleApp"><h1>Markdown Previewer</h1></div>
        <DivContainer editor={true} handleClear={this.handleClear} handleSave={this.handleSave} handleLoad={this.handleLoad} title="Editor">
          <Editor  value={this.state.text}  handleChange={this.handleChange} />
        </DivContainer>
        <DivContainer title="Previewer" extraClass="previewerContainer" addStyles={  {right:0} }>
          <Previewer text={ this.state.text } />
        </DivContainer>
        <div style={ {textAlign: 'center', fontFamily: "Gochi Hand, cursive" } }>written an coded by <a  rel="noopener noreferrer" href="https://www.freecodecamp.com/szayelw" target="_blank">Andrés López</a></div>
      </div>
    );
  }
}

export default App;
