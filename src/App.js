import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat'
import AdvisorChat from './components/AdvisorChat'
import Conversations from './components/Conversations'

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (window.location.search.substr(1) == "agent") {
          return (<div className='App'><div class="nav">
            <Conversations />
          </div>
          <div class="main">
            <AdvisorChat />
          </div></div>);
        } else {
          return (<div className='App'><Chat /></div>);
        }
  }


}
export default App;
