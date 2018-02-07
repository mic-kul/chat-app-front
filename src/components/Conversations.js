import React, { Component } from 'react';
import Cable from 'actioncable';

class Conversations extends Component {
  render() {
    return (
      <div className='Conversations'>
        <h3>Conversations</h3>
        <ul>
          <li>John Doe</li>
          <li>Bruce Almighty</li>
        </ul>
      </div>
    );
  }
}

export default Conversations;