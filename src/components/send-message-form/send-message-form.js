import React, { Component } from 'react';

import './send-message-form.css';

export default class SendMessageForm extends Component {
    render() {
        return (
            <form className="send-message-form">
                <input type="text"
                    placeholder="Type your message and hit ENTER"
                />
            </form>
        )
    }
}