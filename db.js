const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'root',
  host: 'dpg-cko141e1101c73am07hg-a.oregon-postgres.render.com',
  database: 'todo_qxbg',
  password: 'UNipWZc0m8GroKDmSOa0bOybLAJSCvGZ',
  port: 5432,
  ssl: true,
});

module.exports = pool;
