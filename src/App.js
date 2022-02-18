import React from "react";
import TodoItem from "./Components/TodoItem";
import todoData from "./todoData";

const App = () => {
  const todoItems = todoData.map((item) => {
    return <TodoItem key={item.id} item={item} />;
  });

  return <div>{todoItems}</div>;
};

export default App;
