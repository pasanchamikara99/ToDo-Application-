const express = require("express");
const router = express.Router();
const {
  addTodo,
  getTodo,
  completeTodo,
  deleteTodo,
} = require("../Controllers/TodoController");

router.get("/", getTodo);
router.post("/add", addTodo);
router.put("/complete/:id", completeTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
