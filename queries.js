const db = require('./db.js');


const getAllTodos = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM tasks ORDER BY id DESC', (err, results) => {
      if (err) {
        throw err;
        reject(err);
      }

      resolve(results.rows);
    });
  });
};

const getTodosByType = (type) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM tasks WHERE type = $1 ORDER BY id DESC', [type], (err, results) => {
      if (err) {
        reject(err);
      }
  
      resolve(results.rows);
    });
  });
};

const getTodosByPage = (step, type, page) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM tasks WHERE type = $1', [type], (err, results) => {
      if (err) {
        reject(err);
      }
      console.log(results);
  
      const allTasks = results.rows;
      const usersTasks = typeof page === 'number' ? allTasks.slice(step * page, (step * page) + step) : allTasks;
      const maxPage = Math.ceil(results.rows.length / step);
  
      resolve({ todos: usersTasks, maxPage });
    });
  });
};

const appendTodo = ({ title, description, type, createdAt, expiredAt }) => {
  return new Promise((resolve, reject) => {
    db.query(
      `
      INSERT INTO tasks ("title", "description", "type", "createdAt", "expiredAt")
      VALUES ($1, $2, $3, $4, $5)
      `,
      [title, description, type, createdAt, expiredAt],
      (err, results) => {
        if (err) {
          reject(err);
        }
  
        resolve(results.rows)
      }
    );
  })
};

const updateTodo = ({ title, description, type, createdAt, expiredAt, id }) => {
  return new Promise((resolve, reject) => {
    db.query(
      `
      UPDATE tasks
      SET title = $1, description = $2, type = $3, createdAt = $4, expiredAt = $5
      WHERE id = $6
      `,
      [title, description, type, createdAt, expiredAt, id],
      (err, results) => {
        if (err) {
          reject(err);
        }

        resolve(results.rows);
      }
    )
  });
};

const updateType = (id, type) => {
  return new Promise((resolve, reject) => {
    db.query("UPDATE tasks SET type = $1 WHERE id = $2", [type, id], (err, results) => {
      if (err) {
        reject(err);
      }
  
      resolve(results.rows);
    });
  });
};

const deleteTodo = ({ id }) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM tasks WHERE id = $1', [id], (err, results) => {
      if (err) {
        reject(err);
      }
  
      resolve(results.rows);
    });
  });
}

module.exports = {
  getAllTodos,
  appendTodo,
  updateTodo,
  deleteTodo,
  getTodosByType,
  updateType,
  getTodosByPage
};
