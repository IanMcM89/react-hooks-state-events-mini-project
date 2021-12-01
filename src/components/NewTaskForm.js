import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [inputValue, setInputValue] = useState('');
  const [optionValue, setOptionValue] = useState('Code');

  function handleDetailsChange(e) {
    setInputValue(e.target.value);
  }

  function handleOptionsChange(e) {
    setOptionValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTaskObj = {
      text: inputValue,
      category: optionValue,
    };

    onTaskFormSubmit(newTaskObj);
  }

  const optionsList = categories.map((category) => {
    if (category !== 'All') return <option key={category}>{category}</option>
  });

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailsChange} value={inputValue}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleOptionsChange} value={optionValue}>
          {optionsList}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
