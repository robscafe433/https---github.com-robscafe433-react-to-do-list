import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// const App = () => {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     );
// };

// const Header = (props) => {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     );
// };

// const Greeting = () => {
//     return <h1>Good {timeOfDay} to you, sir or madam!</h1>;
// };

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
