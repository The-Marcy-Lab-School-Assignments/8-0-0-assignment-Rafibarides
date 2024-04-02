const express = require('express');
const app = express();
const port = 8080; 

app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Server</h1>');
  const name = req.body
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html'); 
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is your data.' });
});

app.get('/api/search', (req, res) => {
  const name = (req.query.name || "Stranger")
  res.send(`Hello ${name}`)
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
