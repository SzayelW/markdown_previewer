import React from 'react';

export default class Previewer extends React.Component{
  render(){
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}
