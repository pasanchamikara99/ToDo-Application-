const express = require("express");
const Todo = require("../Models/ToDo");

const getTodo = async (req, res) => {
  const todos = await Todo.find();
  if (todos) {
    res.status(200).json(todos);
  } else {
    res.status(404).json({ message: "No todos found" });
  }
};

const addTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo
    .save()
    .then(() => {
      res.status(201).json({ message: "Todo added" });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

const completeTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;

  const todo = await Todo.findByIdAndDelete(id);

  res.send(todo);
};

module.exports = {
  addTodo,
  getTodo,
  completeTodo,
  deleteTodo,
};
