import React from 'react';
import marked from 'marked';

export default class Previewer extends React.Component{
  render(){
    return (
      <div  dangerouslySetInnerHTML={ {__html: marked(this.props.text) }} />
    );
  }
}
