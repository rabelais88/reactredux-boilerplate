import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addNo, subNo } from './store/actionCreators';
const mapStateToProps = state => {
  return { num: state.num };
};

const mapDispatchToProps = dispatch => {
  return {
    addNo: value => dispatch(addNo(value)),
    subNo: value => dispatch(subNo(value)),
    // or without actionCreators, the above can be replaced like below
    // addNo: value => dispatch({ type: 'ADD', value });
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { testval: 'testing...' };
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }
  add(val) {
    console.log('add requested!', val);
    this.props.addNo(val);
  }
  subtract(val) {
    console.log('subtract requested', val);
    this.props.subNo(val);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            testing...
          </p>
          <p>number in store: { this.props.num }</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.add(1)}>add</button>
          <button onClick={() => this.subtract(1)}>subtract</button>
        </header>
      </div>
    );
  }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;
