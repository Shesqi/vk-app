// delete me

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">photos</h1>
        </header>
        <p className="App-intro">Most liked photos</p>
        <p>My name is {this.props.qwerty}</p>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    qwerty: store.user
  }
};

export default connect(mapStateToProps)(App)
