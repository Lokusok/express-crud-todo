const express = require('express');
const cors = require('cors');
const { 
  getAllTodos,
  getTodosByPage,
  appendTodo, 
  deleteTodo,
  updateType } = require('./queries.js');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.get('/tasks', (req, res ) => {
  getAllTodos().then((data) => {
    res.status(200).json(data);
  });
});

app.post('/tasks', (req, res) => {
  appendTodo(req.body).then((data) => {
    res.status(200).json(data);
  });
});

const step = 3;
app.get('/tasks/:type/:page', (req, res) => {
  const type = req.params.type;
  const page = Number(req.params.page) - 1;

  getTodosByPage(step, type, page).then((data) => {
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
  updateType(req.params.id, 'overdue').then((data) => {
    res.status(200).json(data);
  });
});

app.delete('/tasks/:id', (req, res) => {
  deleteTodo(req.params.id).then((data) => {
    res.status(200).json(data);
  });
});

app.listen(port, () => console.log('Start success'));
