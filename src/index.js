const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3333;

// controllers

const { getEntries, postEntries } = require('./controllers/entrysController');

// config
app.use(express.json());

// routes
app.get('/', (request, response) => {
  return response.send('home ok');
});
app.get('/entries', getEntries);
app.post('/entries', postEntries);

console.log(path.join(__dirname, 'data'));

app.listen(port, () => console.log('server on in port ' + port));
