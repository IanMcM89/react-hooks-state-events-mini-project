import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  function handleClick(e) {
    e.target.parentElement.remove();
  }

  const tasksList = tasks.map((task) => <Task key={task.text} text={task.text} category={task.category} onClick={handleClick}/>);

  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList;
