import React, { Component } from 'react';

import Title  from '../title';
import MessageList  from '../message-list';
import SendMessageForm  from '../send-message-form';

import './app.css';

export default class App extends Component {
  
  constructor() {
    super();
    // this.tempId = 100;
    this.socket = '';
    this.state = {
      messages: [
          // {from: 'Nick', message: 'Test message1', id: 1, time: 0},
          // {from: 'Andy', message: 'Test message2', id: 2, time: 0},
          // {from: 'Marta', message: 'Test message3', id: 3, time: 0}
      ]
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  // createOwnMessage(text) {
  //     return {
  //         from: 'Me', message: text, id: this.tempId++, time: 0
  //     };
  // }

  sendMessage(text) {
    // const ownMessage = this.createOwnMessage(text);
    this.socket.send(JSON.stringify({ from: 'Alex', message: text }));
    // this.setState(({ messages }) => {
    //     return {
    //         messages: [...messages, ownMessage]
    //     };
    // });
  }

  receiveMessages(data) {
    const newMessages = JSON.parse(data).map(({ from, message, id, time }) => {
      return {
        from,
        message,
        id,
        time
      };
    });
    console.log(data);
    // console.log(JSON.parse(data));
    // console.log(newMessages);
    this.setState(({ messages }) => {
      return {
        messages: [...messages, ...newMessages]
      };
    });
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://st-chat.shas.tel');
    this.socket.binaryType = "arraybuffer";
    this.socket.onopen = function(event) {console.log('connect');};
    
    this.socket.onmessage = (event) => {
      this.receiveMessages(event.data);
    };

    this.socket.onerror = function(error) {console.log(error.message);};

    this.socket.onclose = function(event) {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
      console.log('Код: ' + event.code + ' причина: ' + event.reason);
    };
  }

  render() {
    
    return (
      <div className="chat-app">
        <Title />
        <MessageList
         messages={this.state.messages}/>
        <SendMessageForm 
            sendMessage={this.sendMessage}/>
      </div>
    );
  }
}

