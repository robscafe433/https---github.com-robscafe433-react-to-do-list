import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes",
    };
  }
  render() {
    return <h1>is state important? {this.state.answer}</h1>;
  }
}

export default App;
