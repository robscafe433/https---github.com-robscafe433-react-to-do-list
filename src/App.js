import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    let logInStatus;
    if (this.state.isLoggedIn) {
      logInStatus = "in";
    } else {
      logInStatus = "out";
    }

    console.log(logInStatus);

    return (
      <div>
        <h1>User is logged {logInStatus}</h1>
      </div>
    );
  }
}

export default App;
