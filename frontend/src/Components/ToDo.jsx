import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ToDo() {
  const [todo, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/todo")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      {todo.map((data) => (
        <div className="todo">
          <div className="text">
            <h5>{data.text}</h5>
          </div>
          <div className="text">
            <h5>{data.timeStamp}</h5>
          </div>
          <div className="buttons">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}
