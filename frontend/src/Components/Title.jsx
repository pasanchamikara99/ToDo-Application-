import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Title() {
  const [clicked, setClicked] = useState(false);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      text: task,
      date: date,
    };

    axios
      .post("http://localhost:8000/api/v1/todo/add", data)
      .then((response) => {
        if (response.status == 201) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Todo Has been Added",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setTask("");
    setDate("");
  };

  return (
    <div>
      <div className="header">
        <div className="title">
          <h1>Welcome Pasan</h1>

          <button>
            {" "}
            <Link to="/login">Log Out</Link>
          </button>
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

              <input
                type="date"
                value={task}
                onChange={(e) => setDate(e.target.value)}
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
