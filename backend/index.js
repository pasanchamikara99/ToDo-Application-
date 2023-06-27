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

//Connect to MongoDB
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

//Todo CRUD
app.use("/api/v1/todo", TodoRoutes);
