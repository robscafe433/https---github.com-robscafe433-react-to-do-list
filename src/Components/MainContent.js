import React from "react";
import ReactDOM from "react-dom";
import ToDoItem from "./ToDoItem";

const MainContent = () => {
    return (
        <div>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    );
};

export default MainContent;
