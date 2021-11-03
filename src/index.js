const express = require('express');
const app = express();
const port = 3000;
const heroe = require('./endpoints/heroe.js');
const login = require('./endpoints/login.js');

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hola!');
})

app.post('/login/', login.endpoint);
app.get('/heroe/:id', heroe.endpoint);

app.listen(3000, function () {
    console.log('listening on '+port)
});