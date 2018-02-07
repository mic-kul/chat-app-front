import React from 'react';
import Chat from './Chat';
import './AdvisorChat.css';

class AdvisorChat extends Chat {
  handleStartCallEvent(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='Chat'>
        <h1>Advisor Chat</h1>
        <ul className='chat-logs'>
          { this.renderChatLog() }
        </ul>
        <input
          onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
          value={ this.state.currentChatMessage }
          onChange={ (e) => this.updateCurrentChatMessage(e) }
          type='text'
          placeholder='Enter your message...'
          className='chat-input'/>
        <button
          onClick={ (e) => this.handleSendEvent(e) }
          className='send'>
          Send
        </button>
        <button
          onClick={ (e) => this.handleStartCallEvent(e) }
          className='send'>
          Start call
        </button>
      </div>
    );
  }
}

export default AdvisorChat;
