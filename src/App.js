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
    if (window.location.search.substr(1).includes("agent")) {
          return (<div className='App'>
            <Conversations />
            <AdvisorChat />
          </div>);
        } else {
          return (<div className='App'><Chat /></div>);
        }
  }

}
export default App;
