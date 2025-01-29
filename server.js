const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
  user: "admin",
  host: "postgres_db",
  database: "mydatabase",
  password: "admin123",
  port: 5432,
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Database Connected: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database Connection Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
