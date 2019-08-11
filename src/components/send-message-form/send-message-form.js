import React, { Component } from 'react';

import './send-message-form.css';

export default class SendMessageForm extends Component {

    constructor() {
        super();
        this.state = {
            masagge: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(event) {
        const masagge = event.target.value;
        this.setState({
            masagge
        });
    }

    submitHandler(event) {
        event.preventDefault();
        this.props.sendMessage(this.state.masagge);
        this.setState({
            masagge: ''
        });
    }

    render() {

        return (
            <form className="send-message-form"
                onSubmit={this.submitHandler}
            >
                <input type="text"
                    placeholder="Type your message and hit ENTER"
                    onChange={this.changeHandler}
                    value={this.state.masagge}
                />
            </form>
        )
    }
}