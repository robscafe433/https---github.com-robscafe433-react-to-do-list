import { useState } from "react";

const App = () => {
  // let name = "mario";
  const [name, setName] = useState("mario");

  const handleClick = () => {
    setName("luigi");
    console.log(name);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
