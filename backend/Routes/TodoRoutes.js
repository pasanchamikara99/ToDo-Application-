const express = require("express");
const router = express.Router();
const { addTodo, getTodo } = require("../Controllers/TodoController");

router.get("/", getTodo);
router.post("/add", addTodo);

module.exports = router;
