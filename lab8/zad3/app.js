const express = require('express');
const redis = require('redis');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const redisClient = redis.createClient({ host: "redis" });

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'app',
  password: 'password',
  port: 5432,
});

app.get('/', (req, res) => {
  redisClient.lrange('data', 0, -1, (err, data) => {
    res.json(data);
  });
});

app.post('/', (req, res) => {
  const { message } = req.body;
  redisClient.rpush('data', message);
  res.sendStatus(201);
});

app.post('/users', async (req, res) => {
  const { name, password } = req.body;
  const query = 'INSERT INTO users (name, password) VALUES ($1, $2)';
  try {
    await pool.query(query, [name, password]);
    res.sendStatus(201);
  } catch (err) {
    console.error('Error inserting user ', err);
    res.sendStatus(500);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
