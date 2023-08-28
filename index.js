const db = require('./db.js');
const express = require('express');
const cors = require('cors');
const { 
  getAllTodos,
  appendTodo, 
  updateTodo, 
  deleteTodo,
  getTodosByType,
  updateType } = require('./queries.js');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get('/tasks', (req, res ) => {
  getAllTodos().then((data) => {
    res.status(200).json(data);
  });
});

app.get('/tasks/:type', (req, res) => {
  getTodosByType(req.params.type).then((data) => {
    res.status(200).json(data);
  });
});

app.post('/tasks', (req, res) => {
  appendTodo(req.body).then((data) => {
    res.status(200).json(data);
  });
});

app.put('/complete/:id', (req, res) => {
  updateType(req.params.id, 'completed').then((data) => {
    res.status(200).json(data);
  });
});

app.put('/cancel/:id', (req, res) => {
  updateType(req.params.id, 'cancelled').then((data) => {
    res.status(200).json(data);
  });
});

app.put('/overdue/:id', (req, res) => {
  
});

app.delete('/tasks/:id', (req, res) => {
  deleteTodo(req.params.id).then((data) => {
    res.status(200).json(data);
  });
});

app.listen(port, () => console.log(`listening on: http://localhost:${port}/`));
