import React from 'react';

import axios from 'axios';

import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  state = {
    failed: false,
    data: undefined,
  };

  async componentWillMount() {
    try {
      const ret = await axios.get('/api/test');
      this.setState({ data: ret.data });
    } catch (err) {
      this.setState({ failed: true });
    }
  }

  render() {
    const { failed, data } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          { data &&
            <p>From API: { JSON.stringify(data) }</p>
          }

          { failed &&
            <p>Fetch from API failed</p>
          }
        </header>
      </div>
    );
  }
}
