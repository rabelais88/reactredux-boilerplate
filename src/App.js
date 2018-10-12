import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addNo, subNo } from './store/actionCreators';
const mapStateToProps = state => {
  return {
    num: state.num,
    histories: state.histories
  };
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
    this.addTen = this.addTen.bind(this);
  }
  add(val) {
    console.log('add requested!', val);
    this.props.addNo(val);
  }
  subtract(val) {
    console.log('subtract requested', val);
    this.props.subNo(val);
  }
  addTen() {
    this.add(10);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            testing...
          </p>
          <p>number in store: { this.props.num }</p>
          <button onClick={() => this.add(1)}>add</button>
          <button onClick={() => this.subtract(1)}>subtract</button>
          <button onClick={this.addTen}>add 10</button>
          {this.props.histories.map(elHistory => (<li>{elHistory}</li>))}
        </header>
      </div>
    );
  }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectedApp;
