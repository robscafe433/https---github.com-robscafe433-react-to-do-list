import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={(event) => {
          props.handleChange(props.item.id);
        }}
      />
      <p>{props.item.text}</p>
    </div>
  );
};

export default TodoItem;
