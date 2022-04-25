const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "greed-privacy-written",
  host: "localhost",
  port: 5432,
  database: "smashbroscreator"
});

module.exports = pool;