import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");

  const changeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const clickHandler = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={changeHandler}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={clickHandler}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
