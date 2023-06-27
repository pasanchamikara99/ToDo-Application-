const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const app = express();
const cors = require("cors");
const TodoRoutes = require("./Routes/TodoRoutes");

const port = 8000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/todo", TodoRoutes);

// app.delete("/todo/:id", async (req, res) => {
//   const id = req.params.id;

//   const todo = await Todo.findByIdAndDelete(id);

//   res.send(todo);
// });

// app.put("/todo/complete/:id", async (req, res) => {
//   const todo = await Todo.findById(req.params.id);

//   todo.complete = !todo.complete;

//   todo.save();

//   res.json(todo);
// });
