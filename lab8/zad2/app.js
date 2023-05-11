const express = require('express');
const redis = require('redis');

const app = express();
app.use(express.json());

const client = redis.createClient({ host: "redis" });

app.get('/', (req, res) => {
  client.lrange('data', 0, -1, (err, data) => {
    res.json(data);
  });
});

app.post('/', (req, res) => {
  const { message } = req.body;
  client.rpush('data', message);
  res.sendStatus(201);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
