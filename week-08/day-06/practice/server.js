'use strict';

const express = require('express');
const mysql = require('mysql');
const path = require('path')
const app = express();

const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shelter'
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/', (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  let date = new Date(req.body.date);
  let hasHome = req.body.hashome;
  if (req.body.name !== '' || req.body.age !== '') {
    conn.query('INSERT INTO dogs (name, age, date, hashome) VALUES (?, ?, ?, ?)', [name, age, date, hasHome], (err, docs) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(docs);
      }
    }
    )
  } else {
    res.status(500).json('Missing fields');
  }
});

app.get('/getDogs', (req, res) => {
  conn.query('SELECT * FROM dogs', (err, docs) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(docs);
    }
  });
});

app.delete('/delete/:id', (req, res) => {
  conn.query('DELETE FROM dogs where id = ? ', [req.params.id], (err, rows) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(rows);
    }
  })
});

app.patch('/adopt/:id', (req, res) => {
  conn.query('UPDATE dogs SET hashome = TRUE where id = ? ', [req.params.id], (err, rows) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(rows);
    }
  })
});



conn.connect(function (err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('connection established');
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

