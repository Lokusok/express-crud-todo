const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'root',
  host: 'dpg-cjnl7gocfp5c73c5geu0-a.frankfurt-postgres.render.com',
  database: 'tasks_1zk3',
  password: 'notxQNKJLtMCAloExTp7KrNobMMpZwxa',
  port: 5432,
  ssl: true
});

module.exports = pool;
