import React, { Component } from 'react';

import './message-list.css';

export default class MessageList extends Component {
  render() {
    const { messages } = this.props;
    const mesagesList = messages.map((message) => {
      return (
        <li key={message.id} className="message">
          <div><span className="author-message">{message.from}</span></div>
          <div><span className="text-message">{message.message}</span></div>
        </li>
      );
    });
    return (
      <ul className="message-list">                 
        {mesagesList}
     </ul>
    )
  }
}