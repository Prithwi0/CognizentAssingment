// src/CountPeople.js
import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1,
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1,
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>People Counter</h1>
        <p>Number of People Entered: {this.state.entrycount}</p>
        <p>Number of People Exited: {this.state.exitcount}</p>
        <button onClick={this.updateEntry} style={{ marginRight: "10px" }}>
          Login
        </button>
        <button onClick={this.updateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
