const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/health', (req, res) => {
  res.send("I'm healthy!");
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
