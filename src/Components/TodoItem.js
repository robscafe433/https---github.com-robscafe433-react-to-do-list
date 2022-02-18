import React from "react";

const TodoItem = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Todo item: {props.item.text}</h2>
      <input type="checkbox" />
    </div>
  );
};

export default TodoItem;
