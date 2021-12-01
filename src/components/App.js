import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categorySelected, setCategorySelected] = useState('All');

  function handleCategoryFilter(e) {
    setCategorySelected(e.target.textContent);

    e.target.className = 'selected';
  }

  const tasksToDisplay = (tasks.filter((task) => {
    if (categorySelected === 'All') return true;

    return task.category === categorySelected;
  }));

  function onTaskFormSubmit(newTaskObj) {
    setTasks([...tasks, newTaskObj]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onClick={handleCategoryFilter}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
