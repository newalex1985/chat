import React, { Component } from 'react';

import Title  from '../title';

import './app.css';

export default class App extends Component {
  
  constructor() {
    super();
    
    this.state = {
      
    };

  }

  render() {
    
    return (
      <div className="chat-app">
        <Title />
      </div>
    );
  }
}

