import React from "react";
import reactDom from "react-dom";
import todoData from "./todoData";
import TodoItem from "./Components/TodoItem";


// #1
class App extends React.Component {
  render() {
    return (
      <div>
        <Header username = "Robert"/>
        <Greeting />
      </div>
    );
  }
}

//#2
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
  }
}

export default App;
