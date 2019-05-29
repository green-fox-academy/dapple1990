'use strict';

const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/loginform.html'))
});

app.post('/send', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

app.listen(port, () => {
  console.log(`the server is running on port ${port}`);
})