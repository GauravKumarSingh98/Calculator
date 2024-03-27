import React, { useState } from "react";

export default function AddToDo({ onNewItems }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonclicked = () => {
    onNewItems(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-centre">
      <div className="row gk-row">
        <div className="col-6">
          <input
            className="w-[90%] rounded text-center p-2"
            type="text"
            placeholder="Enter your Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" className="rounded p-2" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success mb-4 "
            onClick={handleAddButtonclicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
