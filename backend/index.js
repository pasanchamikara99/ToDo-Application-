const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const app = express()
const cors = require('cors')


const Todo = require('./Models/ToDo')

const port = 8000;

app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to MongoDB')
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}).catch((err)=>{
    console.log(err)
})


app.get('/todo' , async (req,res)=>{
    const todos = await Todo.find()
    if(todos){
        res.status(200).json(todos)
    }else{
        res.status(404).json({message:'No todos found'})
    }   
})


app.post('/todo/add' ,  (req,res)=>{

    const todo = new Todo({
        text:req.body.text
    })

    todo.save().then(()=>{
        res.status(201).json({message:'Todo added'})
    }).catch((err)=>{
        res.status(500).json({message:err})
    })

})


app.delete('/todo/:id' , async (req, res) =>{

    const id = req.params.id

    const todo =  await Todo.findByIdAndDelete(id)

    res.send(todo)

})


app.put('/todo/complete/:id' , async (req, res) => {

   const todo = await Todo.findById(req.params.id)

   todo.complete = !todo.complete

   todo.save()

   res.json(todo)

})
  



    