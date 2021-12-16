const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3333;

// controllers
const home = require('./routes/home.js');
const { getEntries, postEntries } = require('./routes/entries.js');

// config
app.use(express.json());

// routes
app.get('/', home);
app.get('/entries', getEntries);
app.post('/entries', postEntries);

console.log(path.join(__dirname, 'data'));

app.listen(port, () => console.log('server on in port ' + port));
