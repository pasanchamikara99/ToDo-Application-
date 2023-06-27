import React from "react";

export default function ToDo() {
  return (
    <div>
      <div className="todo">
        <div className="text">
          <h5>Buy Bread</h5>
        </div>
        <div className="buttons">
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}
