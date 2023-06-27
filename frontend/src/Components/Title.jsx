import React, { useState } from "react";

export default function Title() {
  const [clicked, setClicked] = useState(false);
  const [task, setTask] = useState("");

  const addTask = () => {
    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTask("");
  };

  return (
    <div>
      <div className="header">
        <div className="title">
          <h1>Welcome Pasan</h1>

          <button>Log Out</button>
        </div>

        <div className="headerTitle">
          <h4>Your Tasks</h4>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>

      {clicked && (
        <>
          <div className="addTaskform">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={task}
                placeholder="Enter Task "
                onChange={(e) => setTask(e.target.value)}
              />
              <button>Submit</button>
              <button
                onClick={() => {
                  setClicked(false);
                }}
              >
                Close
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
